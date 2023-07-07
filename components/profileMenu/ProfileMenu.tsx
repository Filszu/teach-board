'use client'


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import { useState } from 'react';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import { ListItemIcon } from '@mui/material';

import { signOut } from 'next-auth/react';
interface Props {
    handleClose: () => void,
    anchorEl: null | HTMLElement,
}

const ProfileMenu = ({handleClose, anchorEl}:Props) => {
    // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);

    // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //   setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };

  return (
    <>
        <Menu color='secondary'
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         <MenuItem onClick={handleClose}>
            <ListItemIcon>
            <Person2RoundedIcon fontSize="small" />
           
            </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <ListItemIcon>
            <Settings fontSize="small" />
           
            </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={()=>{
            handleClose(); 
            signOut(
                // { callbackUrl: `${process.env.STARTER_PAGE}` })
                { callbackUrl: `localhost:3000` })
                
            }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}

export default ProfileMenu