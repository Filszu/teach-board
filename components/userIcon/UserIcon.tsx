'use client'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Image from 'next/image';
import Badge from '@mui/material/Badge';

import styles from './UserIcon.module.css'
import { Stack } from '@mui/material';
type Props = {
    userName: string,
    userImg?: string,
}



const UserIcon = (props: Props) => {
  return (
    
    <div className={styles.icon}>
       

       
      
        <Avatar sx={{ width: 56, height: 56 ,bgcolor: "var(--color-lightBlue)", }}
        alt={`${props.userName[0]??'U'}`}
        >{props.userName[0]}
        

        
        
        </Avatar>
        <Badge 
          badgeContent={50} color="success" style={{position:"absolute", top: "10px",right:"5px"}} max={9} 
        >  
        </Badge>
       
        {/* <Avatar alt="User Profile img" src="../public/imgs/avatars/1.png" /> */}
    </div>
   
  )
}

export default UserIcon