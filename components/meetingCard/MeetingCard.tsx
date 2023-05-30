'use client'
import { Meeting } from "@/types/types"
import Button from '@mui/material/Button';
import EventIcon from '@mui/icons-material/Event';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import Slide from '@mui/material/Slide';
// import { Paper } from "@mui/material"
// interface Props extends Lesson{

// }

import styles from './MeetingCard.module.css'
import { useState } from "react";
interface Props {
    cardType?: string,
    cardDetails: Meeting

}

// export type Meeting = {
//     id: number;
//     studentID: number;
//     statusID: number | null;
//     paymentStatusID: number;
//     duration: string;
//     dateTime: string; 
//     satisfaction: number | null;
//     notes: string;
// };

const MeetingCard = (props: Props) => {
    const meeting = props.cardDetails;

    const [date, time] = meeting.dateTime.split("T");

    
    console.log('meeting',meeting);
    const [showDetails, setShowDetails] = useState(false)
  return (
    <>
     <Slide direction="up" in={true} timeout={meeting.id*150}>
          
      
        <div className={styles.meetingCard}>
            <h3><EventIcon fontSize="inherit"/>{date} <AccessTimeIcon fontSize="inherit"/>{time.substring(0, 5)} </h3>
            <section className={styles.meetingCard__desc}>

              <div className={styles.meetingCard__desc__header}>
                <h2>New meeting with <b>{meeting.student_name??"unknow Name"}</b></h2>
                <section className={styles.meetingCard__actionButtons}>
                  <Button variant="text" startIcon={<EditIcon/>} color="inherit">edit</Button>
                  <Button variant="text" startIcon={<ExpandMoreIcon/>} color="inherit" onClick={()=>setShowDetails(!showDetails)}>more</Button>
                </section>
              </div>

              {
                showDetails&&<section className={styles.meetingCard__details}>
                  <p><b>Duration:</b> {meeting.duration}</p>
                  <p><b>Notes:</b> {meeting.notes}</p>
                </section>
              }
              
              
            </section>
           
            

        </div>
    </Slide>
    </>
  )
}

export default MeetingCard