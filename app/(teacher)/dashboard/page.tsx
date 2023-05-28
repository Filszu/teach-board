import { InfoCard} from '@/components'
import styles from './page.module.css'

import Image from 'next/image'


type Props = {}



const Page = (props: Props) => {
  console.log('db', process.env.DB_PASS)
  return (
    
          <section className={styles.infoBox}>
            <InfoCard/>
          </section>
          
     
  )
}

export default Page