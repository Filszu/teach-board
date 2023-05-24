
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
  

      <div className={styles.center}>
        <h1 className={styles.title}>TeachBoard</h1>
        
        
      </div>
      <div>
          <Link href="./dashboard">Dashboard</Link>
      </div>
      
    </main>
  )
}
