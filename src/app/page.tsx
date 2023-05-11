import styles from './page.module.css'

const getData = async () => {
    const res = await fetch(`https://waterservices.usgs.gov/nwis/iv/?format=json&sites=10163000&parameterCd=00060,00065,00010&siteStatus=active&siteType=ST`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

   
    return res.json()
  }

const Home = async () => {
    const data = await getData()
    console.log(data)
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>River Conditions</h1>
      </div>
    </main>
  )
}

export default Home
