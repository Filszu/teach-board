'use client'
import UserIcon from "../userIcon/UserIcon"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from './Navbar.module.css'
import { IconButton } from "@mui/material";
import Link from "next/link";
type Props = {}

const Navabar = (props: Props) => {
  return (
    <nav className={styles["nav"]}>
        <div>
         <h2>Teacher Dashboard</h2>
        </div>
        <div className={styles.menuLeft}>
          <Link href="./dashboard/meetings/add-new-meeting">
          <span className={styles.nav__navIcon}>
          <IconButton aria-label="add new meeting" color="inherit" >
            <AddCircleIcon  sx={{ fontSize: 30 }}/>
          </IconButton>
          </span>
          </Link>
        </div>
        <div>
          <UserIcon userName='Filszu' />
        </div>
        
    </nav>
  )
}

export default Navabar