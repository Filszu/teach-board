'use client'
import { Meeting, MeetingCardType } from "@/types/types"
import Button from '@mui/material/Button';
import EventIcon from '@mui/icons-material/Event';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TimerIcon from '@mui/icons-material/Timer';
import EditNoteIcon from '@mui/icons-material/EditNote';

import Slide from '@mui/material/Slide';
// import { Paper } from "@mui/material"
// interface Props extends Lesson{

// }

import styles from './MeetingCard.module.css'
import { useState } from "react";
import Link from "next/link";
interface Props {
    cardType?: MeetingCardType,
    cardDetails: Meeting,
    cardIndex?: number,

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

    
    const [date, time] = meeting.dateTime?meeting.dateTime.split("T"):["?","?"];

    
    console.log('meeting',meeting);
    const [showDetails, setShowDetails] = useState(false)
    console.log('cardIndex',props.cardIndex??"no index")
  return (
    <>
     {/* <Slide direction="up" in={true} timeout={(props.cardIndex??1)*150}> */}
          
      
        <div className={`anim__slide-top ${styles.meetingCard} `}
          style={{animationDelay:`${(props.cardIndex??1)*.1}s`}}
        >
            <h3><EventIcon fontSize="inherit"/>{date} <AccessTimeIcon fontSize="inherit"/>{time.substring(0, 5)} </h3>
            <section className={styles.meetingCard__desc}>

              <div className={styles.meetingCard__desc__header}>
                <h2>New meeting with <u><b>{meeting.student_name??"unknow Name"} {meeting.student_surname??""}</b></u></h2>
                <section className={styles.meetingCard__actionButtons}>
                  <Link href={`./meetings/${meeting.id}/edit`}><Button variant="text" startIcon={<EditIcon/>} color="inherit">edit</Button></Link>
                  <Button variant="text" startIcon={<ExpandMoreIcon/>} color="inherit" onClick={()=>setShowDetails(!showDetails)}>more</Button>
                </section>
              </div>

              {
                showDetails&&<section className={styles.meetingCard__details}>
                  <p><b><AttachMoneyIcon fontSize="inherit"/> Payment Status:</b> <span style={{color:`var(--color-${meeting.payment_status??"black"})`}}>{meeting.payment_status??"?"}</span></p>
                  <p><b><AccessTimeIcon fontSize="inherit"/> Duration:</b> {meeting.duration??"?"}</p>
                  <p><b><EditNoteIcon fontSize="inherit"/> Notes:</b> {meeting.notes??"?"}</p>
                </section>
              }
              
              
            </section>
           
            

        </div>
    {/* </Slide> */}
    </>
  )
}

export default MeetingCard