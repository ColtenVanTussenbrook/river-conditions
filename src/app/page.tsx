'use client'

import React, { useState, useEffect } from 'react'
import type { River, USGSdata, UsState } from '@/types'
import { RiversContainer, SortSelect, StateSelect } from './components'
import styles from './page.module.css'

// TODO: move these global variables
const cfsCode = '00060'
const heightCode = '00065'
const tempCode = '00010'

const cfsDescription = 'Discharge, cubic feet per second'
const heightDescription = 'Gage height, feet'
const tempDescription = 'Temperature, water, degrees Celsius'

const convertDataToRiverObject = (jsonResponse: USGSdata) => {
  const { timeSeries } = jsonResponse.value
  const rivers: River[] = []

  timeSeries.forEach((river) => {
    const riverValue = river.variable.variableCode[0].value
    const dataValue = river.values[0].value[0].value
    if (!rivers.some((r) => r.name === river.sourceInfo.siteName)) {
      rivers.push({
        name: river.sourceInfo.siteName,
        id: river.sourceInfo.siteCode[0].value,
        discharge: {
          value: riverValue === cfsCode ? dataValue : '',
          description: cfsDescription,
        },
        temperature: {
          value: riverValue === tempCode ? dataValue : '',
          description: tempDescription,
        },
        height: {
          value: riverValue === heightCode ? dataValue : '',
          description: heightDescription,
        },
      })
    } else {
      const riverToUpdate = rivers.find((r) => {
        return r.name === river.sourceInfo.siteName
      })
      if (riverToUpdate) {
        if (!riverToUpdate?.discharge?.value) {
          riverToUpdate.discharge = {
            value: riverValue === cfsCode ? dataValue : '',
            description: cfsDescription,
          }
        }
        if (!riverToUpdate?.temperature?.value) {
          riverToUpdate.temperature = {
            value: riverValue === tempCode ? dataValue : '',
            description: tempDescription,
          }
        }
        if (!riverToUpdate?.height?.value) {
          riverToUpdate.height = {
            value: riverValue === heightCode ? dataValue : '',
            description: heightDescription,
          }
        }
      }
    }
  })

  return rivers
}

const popularRivers = [
  '09234500', // Green River (A Section)
  '09211200', // Green River (Below Fontanelle)
  '13042500', // Henrys Fork (Box Canyon)
  '09223000', // Ham's Fork
  '10163000', // Provo River
  '10109000', // Logan River
  '06040000', // Madison River
]

const Home = () => {
  const [usState, setUsState] = useState<UsState>({ name: 'Utah', abbv: 'UT' })
  const [selection, setSelection] = useState<string>('popularSel')
  const [usgsData, setUsgsData] = useState<USGSdata>()

  useEffect(() => {
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
    }

    fetchData()
  }, [selection, usState])

  return (
    <main className={styles.main}>
      <div className="min-w-1/2">
        <h1 className="text-xl font-bold">River Conditions</h1>
        <SortSelect selection={selection} setSelection={setSelection} />

        {selection === 'stateSel' && (
          <StateSelect usState={usState} setUsState={setUsState} />
        )}

        {usgsData ? (
          <RiversContainer riverData={convertDataToRiverObject(usgsData)} />
        ) : (
          // TODO: add support link
          <p>
            No river data. Try refining your search, or contact support here.
          </p>
        )}
      </div>
    </main>
  )
}

export default Home
