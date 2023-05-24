import { Navabar } from '@/components'
import styles from './page.module.css'

import Image from 'next/image'


type Props = {}



const Page = (props: Props) => {
  return (
    <div>
        <h1 className={styles.title}>Dashboard</h1>
        <Navabar />
    </div>
  )
}

export default Page