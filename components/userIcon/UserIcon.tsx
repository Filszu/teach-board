'use client'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Image from 'next/image';
import Badge from '@mui/material/Badge';

import styles from './UserIcon.module.css'
import { Stack } from '@mui/material';
import { useSession } from 'next-auth/react';
import ProfileMenu from '../profileMenu/ProfileMenu';
import { useState } from 'react';
// type Props = {
//     userName: string,
//     userImg?: string,
// }
interface Props {
  // session: any,
}


const UserIcon = (props: Props) => {

  const { data: session, status } = useSession();
  


  //menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  
  return (
    
    <div>

    
      <div 
        className={styles.icon} 
        
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        // onClick={()=>handleClick}
        onClick={handleClick}
      >
        

        
        
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
      <ProfileMenu handleClose={handleClose} anchorEl={anchorEl}/>
    </div>
   
  )
}

export default UserIcon