'use client'
import { Box, Skeleton, Stack } from '@mui/material';
import styles from './MeetingCard.module.css';
const MeetingCardSkeleton = () => {
  return (
    <div className={`${styles.meetingCard} `} 
   >
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Skeleton variant="text" width={"60%"} height={40} animation="wave"/>
        <Skeleton variant="text" width={"20%"} height={40} animation="wave"/> 
    </div>
     <Skeleton variant="rounded" width={"100%"} height={80} animation="wave"/>
   
       
      
       

   </div>
  )
};

export default MeetingCardSkeleton;

 // <div>
      {/* <Skeleton variant="rounded" width={'100%'} height={60} 
       sx={{ bgcolor: 'var(--elements-secondary-color)' }} animation="pulse"/>
      <Skeleton variant="text" width={120} height={20} />
      <Skeleton variant="text" width={100} height={16} />
      <Skeleton variant="text" width={180} height={16} />
      <Skeleton variant="text" width={150} height={16} /> */}
        /* <Stack spacing={1}>
     
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

    
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack> */
    // </div>