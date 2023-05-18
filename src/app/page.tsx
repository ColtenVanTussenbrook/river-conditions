'use client'

import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import type { River, USGSdata } from '@/types'
import { RiversContainer, StateSelect } from './components'
import styles from './page.module.css'

// TODO: move these global variables
const cfsCode = '00060'
const heightCode = '00065'
const tempCode = '00010'

const cfsDescription = 'Discharge, cubic feet per second'
const heightDescription = 'Gage height, feet'
const tempDescription = 'Temperature, water, degrees Celsius'

/**
 * Returns all data for a single state
 */
const getDataByState = async (stateCode: string) => {
  const res = await fetch(
    `http://waterservices.usgs.gov/nwis/iv/?stateCd=${stateCode}&format=json`,
    { cache: 'no-store' }
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const getDataByRiver = async (riverCode: string | string[]) => {
  let rivers = riverCode
  if (riverCode.length > 0 && typeof riverCode !== 'string') {
    rivers = riverCode.join(',')
  }

  //   const { isLoading, error, data } = useQuery({
  //     queryKey: ['usgsData', rivers],
  //     queryFn: () =>
  //       fetch(
  //         `http://waterservices.usgs.gov/nwis/iv/?site=${rivers}&parameterCd=00060,00065,00010&format=json`
  //       ).then((res) => res.json()),
  //   })
  //   const res = await fetch(
  //     `http://waterservices.usgs.gov/nwis/iv/?site=${rivers}&parameterCd=00060,00065,00010&format=json`
  //   )

  const res = await fetch('https://api.publicapis.org/entries')

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res

  //   return res.json()
  //   if (isLoading) return 'Loading...'

  //   if (error) return `An error has occurred`
}

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

const Home = () => {
  //   const [usState, setUsState] = useState<string>('Utah')
  //   const data = await getDataByState('ny')

  const [usgsData, setUsgsData] = useState<USGSdata>()
  useEffect(() => {
    getDataByRiver(['01646500', '06306300']).then((data) => {
      //   console.log(data)
      setUsgsData(data)
    })
  }, [])

  console.log(usgsData)
  return (
    <main className={styles.main}>
      <div>
        <h1 className="text-xl font-bold">River Conditions</h1>

        {/* <StateSelect usState={usState} setUsState={setUsState} /> */}
        {/* <RiversContainer
          riverData={usgsData ? convertDataToRiverObject(usgsData) : 'no data'}
        /> */}
      </div>
    </main>
  )
}

export default Home
