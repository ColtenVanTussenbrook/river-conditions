'use client'

import React, { useState, useEffect } from 'react'
import * as JsSearch from 'js-search'
import { Grid } from 'react-loader-spinner'
import type { River, USGSdata, UsState } from '@/types'
import { RiversContainer, Search } from './components'
import styles from './page.module.css'
import ShowByContainer from './components/ShowByContainer/ShowByContainer'
import { popularRivers, convertDataToRiverObject } from '..'

const Home = () => {
  const [usState, setUsState] = useState<UsState>({ name: 'State', abbv: '' })
  const [selection, setSelection] = useState<string>('popularSel')
  const [usgsData, setUsgsData] = useState<USGSdata>()
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    let dynamicPartOfUrl = ''
    const fetchData = async () => {
      if (selection === 'popularSel') {
        dynamicPartOfUrl = `site=${popularRivers.join(',')}`
      }
      if (selection === 'stateSel') {
        dynamicPartOfUrl = `stateCd=${usState.abbv}`
      }
      const res = await fetch(
        `https://waterservices.usgs.gov/nwis/iv/?${dynamicPartOfUrl}&parameterCd=00060,00065,00010&format=json`
      )
      const json = await res.json()

      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }

      setUsgsData(json)
      setIsLoading(false)
    }

    fetchData()
  }, [selection, usState])

  let riversList = usgsData ? convertDataToRiverObject(usgsData) : []
  const search = new JsSearch.Search('name')
  search.addIndex('name')
  search.addDocuments(riversList)

  if (searchQuery !== '' && riversList) {
    riversList = search.search(searchQuery) as River[]
  }

  return (
    <main className={styles.main}>
      <div className="min-w-1/2 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">River Conditions</h1>
        <p className="text-xs md:text-base mb-4">
          Easiest way to see current flows on rivers in the US
        </p>
        <ShowByContainer
          selection={selection}
          setSelection={setSelection}
          usState={usState}
          setUsState={setUsState}
        />

        <Search
          searchTerm={selection === 'stateSel' ? usState.name : 'popular'}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* TODO: refactor this ato avoid a nested ternary */}
        {/* eslint-disable-next-line no-nested-ternary */}
        {riversList.length > 0 ? (
          isLoading ? (
            <Grid
              height="80"
              width="80"
              color="#ffffff"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{ justifyContent: 'center', marginTop: '6rem' }}
              wrapperClass=""
              visible
            />
          ) : (
            <RiversContainer riverData={riversList} />
          )
        ) : (
          // TODO: add support link
          <p>No river data. Try refining your search, or contact support.</p>
        )}
      </div>
    </main>
  )
}

export default Home
