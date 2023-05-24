'use client'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Image from 'next/image';

import styles from './UserIcon.module.css'
type Props = {
    userName: string,
    userImg?: string,
}



const UserIcon = (props: Props) => {
  return (
    <div className={styles.icon}>
        <Avatar sx={{ width: 56, height: 56 ,bgcolor: deepOrange[500], }}
        
        >{props.userName[0]}</Avatar>
        {/* <Avatar alt="User Profile img" src="../public/imgs/avatars/1.png" /> */}
    </div>
  )
}

export default UserIcon