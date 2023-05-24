'use client'
import UserIcon from "../userIcon/UserIcon"
import styles from './Navbar.module.css'
type Props = {}

const Navabar = (props: Props) => {
  return (
    <nav className={styles["nav"]}>
        <UserIcon userName='Filszu' />
    </nav>
  )
}

export default Navabar