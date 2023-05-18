import type { USGSdata } from '@/types'
import { RiversContainer, StateSelect } from './components'
import styles from './page.module.css'

/**
 * Returns all data for a single state
 */
const getDataByState = async (stateCode: string) => {
  const res = await fetch(
    `http://waterservices.usgs.gov/nwis/iv/?stateCd=${stateCode}&format=json`
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

const getDataByRiver = async (riverCode: string) => {
  const res = await fetch(
    `http://waterservices.usgs.gov/nwis/iv/?site=${riverCode}&format=json`
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

const convertDataToUsable = (jsonResponse: USGSdata) => {
  return jsonResponse.value.timeSeries || 'No data found'
}

const Home = async () => {
  const data = await getDataByState('ny')
  // const riverData = convertDataToUsable(data)
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>River Conditions</h1>
        <StateSelect />
        <RiversContainer riverData={convertDataToUsable(data)} />
      </div>
    </main>
  )
}

export default Home
