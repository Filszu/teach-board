'use client'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Image from 'next/image';
import Badge from '@mui/material/Badge';

import styles from './UserIcon.module.css'
import { Stack } from '@mui/material';
import { useSession } from 'next-auth/react';
// type Props = {
//     userName: string,
//     userImg?: string,
// }
interface Props {
}


const UserIcon = (props: Props) => {

  const { data: session, status } = useSession();
  
  return (
    
    <div className={styles.icon}>
       

       
      
        {/* <Avatar sx={{ width: 56, height: 56 ,bgcolor: "var(--color-lightBlue)", }}
        alt={`${props.userName[0]??'U'}`}
        >{props.userName[0]}
        </Avatar> */}

        <Badge 
          badgeContent={50} color="success" style={{position:"absolute", top: "10px",right:"5px"}} max={9} 
        >  
        </Badge>
   

        {
          session?.user?.image ? (
            // <img src={session?.user?.image} alt="User Profile img" width={56} height={56} />
            <Avatar sx={{ width: 56, height: 56 }} alt="User Profile img" src={session?.user?.image}  />
          ):(
             <Avatar sx={{ width: 56, height: 56 ,bgcolor: "var(--color-lightBlue)", }}
              alt={`${session?.user?.name??'User profile img'}`}
              >{session?.user?.name?.toString()[0]??'U'}
              </Avatar>
          )
          
        }

        
    </div>
   
  )
}

export default UserIcon