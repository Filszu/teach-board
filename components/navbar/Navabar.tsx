'use client'
import UserIcon from "../userIcon/UserIcon"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from './Navbar.module.css'
import { IconButton } from "@mui/material";
import Link from "next/link";
import AuthCheck from "../authComponents/AuthCheck";
import { useSession } from "next-auth/react";
// type Props = {
//   meetingId: string | number;
// }

const Navabar = () => {

  const { data: session, status } = useSession();
  
  return (
    <nav className={styles["nav"]}>
        <div>
        <Link href="./dashboard"><h2>Teacher Dashboard</h2></Link>
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
        <AuthCheck>
         <UserIcon 
        //  userName='Filszu' 
         />
        </AuthCheck>

          
        </div>
        
        
    </nav>
  )
}

export default Navabar