import { InfoCard, Navabar } from '@/components'
import styles from './page.module.css'

import Image from 'next/image'


type Props = {}



const Page = (props: Props) => {
  console.log('db', process.env.DB_PASS)
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>TeachBoard</h1>
        <Navabar />
        <main className={styles.panelContainer}>
          <section className={styles.infoBox}>
            <InfoCard/>
          </section>
          
        </main>
    </div>
  )
}

export default Page