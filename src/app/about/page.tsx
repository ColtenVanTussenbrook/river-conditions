import Image from 'next/image'
import styles from '../page.module.css'
import rainbowTrout from '../../../public/rainbow.jpg'

const About = () => {
  return (
    <main className={styles.main}>
      <h1 className="text-3xl md:text-5xl font-bold mb-8">
        About River Conditions
      </h1>
      <div className="md:grid md:grid-cols-2 w-3/4 gap-8">
        <div className="mb-4">
          <p>
            I built River Conditions because I found myself constantly needng to
            check the flows on rivers I was going to fish, but getting
            frustrated every time I had to use the USGS website and dig through
            thousands of rivers and then go through a massive page of graphs and
            data I don&apos;t need just to find the current flows.
          </p>
          <br />
          <p>
            Navigating USGS isn&apos;t that hard on a desktop, but when
            you&apos;re 50 miles outside of the nearest town on a fishing trip
            and you have just a sliver of data to check the flows for
            tomorrow&apos;s float, it&apos;s a little cumbersome. River
            Conditions gives you just the data you want: current flows.
            I&apos;ve even added in a popular rivers to easily find major rivers
            in the west, as well as a search by state so you can quickly get the
            river you need.
          </p>
          <br />
          <p>
            If you would like to submit a river to the Popular Rivers list, send
            me an email at coltenvantussenbrook@gmail.com.
          </p>
          <br />
          <p>
            If you&apos;re interested in the tech behind this, The code can be
            found{' '}
            <a
              className="text-slate-400"
              href="https://github.com/ColtenVanTussenbrook/river-conditions"
            >
              here
            </a>
            . You can also find my personal website at{' '}
            <a className="text-slate-400" href="https://coltenv.com">
              coltenv.com
            </a>
          </p>
          <br />
        </div>
        <div>
          <Image
            src={rainbowTrout}
            alt="picture of colten holding a rainbow trout"
          />
        </div>
      </div>
    </main>
  )
}

export default About
