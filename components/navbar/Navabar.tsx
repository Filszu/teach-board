'use client'
import UserIcon from "../userIcon/UserIcon"
import styles from './Navbar.module.css'
type Props = {}

const Navabar = (props: Props) => {
  return (
    <nav className={styles["nav"]}>
        <div>
         <h2>Teacher Dashboard</h2>
        </div>
        <div className={styles.menuLeft}>
          <UserIcon userName='Filszu' />
        </div>
    </nav>
  )
}

export default Navabar