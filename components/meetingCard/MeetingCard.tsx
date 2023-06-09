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
import { MeetingButtons } from "./MeetingButtons";


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
function calcualteStartingIn(dateTime:string){
  
  const meetingTime = new Date(dateTime);
  const currentTime = new Date();
  const timeDiff = meetingTime.getTime() - currentTime.getTime();

  

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  // const startingIn = `${days} day(s), ${hours} hour(s), ${minutes} minute(s)`;
  // starting in as object 
  const startingIn = {
    days,
    hours,
    minutes
  }

  let msg;
  //if today: starting in hh:mm
  if(days === 0 && (hours > 0 || minutes > 0)){
    msg = `soon - in `;
    if(hours ===0){
      msg+=`${minutes}m`;
    }
    else{
      msg+=`${hours}h:${minutes}m`;
    }
  }
  //if tomorrow: starting in tomorrow hh:mm
  if(days === 1){
    msg = `tomorrow`;
  }
  //if in 2 days: starting in day after tomorrow hh:mm
  if(days === 2){
    msg = `in 2 days`;
  }
  // The meeting took place
  if(days < 0 || (days === 0 && hours < 0)){
    msg = `took place`;
  }
  // the meeting took place today

  

  return {...startingIn,msg};

  // if (timeDiff <= 0) {
  //   return "00:00"; // Meeting has already started
  // }

}
interface Props {
  cardType?: MeetingCardType,
  cardDetails: Meeting,
  cardIndex?: number,

}
const MeetingCard = (props: Props) => {
    const meeting = props.cardDetails;

   
    
    const [date, time] = meeting.dateTime?meeting.dateTime.split("T"):["?","?"];

    let startingIn = null;
    if(meeting.dateTime){

      meeting.dateTime = new Date(meeting.dateTime).toISOString();

      console.log('meeting DT',meeting.dateTime)
      console.log(new Date(meeting.dateTime).toLocaleString())

      
       startingIn= calcualteStartingIn(meeting.dateTime);
      console.log('startingIn',startingIn);

    }

    
    console.log('meeting',meeting);
    const [showDetails, setShowDetails] = useState(false)
    console.log('cardIndex',props.cardIndex??"no index")

    function cardTypeClass(statusID:number | null){
      switch (statusID) {
        case 1:
          return styles.meetingCard_status_completed;
        case 2:
          return styles.meetingCard_status_canceled;
        case 3:
          return styles.meetingCard_status_scheduled;
        default:
          return styles.meetingCard_status_scheduled;
      }

    }

    

  return (
    <>
     {/* <Slide direction="up" in={true} timeout={(props.cardIndex??1)*150}> */}
          
      
        <div className={`anim__slide-top ${styles.meetingCard} ${cardTypeClass(meeting.statusID)} ${startingIn?.msg=="took place"?styles.meetingCard_tookPlace:""}
         `}
        >
            <h3>
              <div>
                <EventIcon fontSize="inherit"/>{date??date} <AccessTimeIcon fontSize="inherit"/>{time.substring(0, 5)} 
                <MeetingButtons/>
              </div>
              
              <div className={styles.meetingCard__startingIn}>
              {startingIn&&
                 startingIn.msg!=="took place"? "starting "+startingIn.msg: "took place"}
                {/* {startingIn.days==0?? `${startingIn.hours}h ${startingIn.minutes} m`}
                {startingIn.days<0?? `Meeting has already started`} */}
              </div>
              
               
            </h3>
            <section className={styles.meetingCard__desc}>

              <div className={styles.meetingCard__desc__header}>
                <h2>New meeting with <u><b>{meeting.student_name??"unknow Name"} {meeting.student_surname??""}</b></u></h2>
                <section className={styles.meetingCard__actionButtons}>
                  <Link href={{pathname:`./dashboard/meetings/${meeting.id}`, query: { displayMode: 'edit' }}}><Button variant="text" startIcon={<EditIcon/>} color="inherit">edit</Button></Link>
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