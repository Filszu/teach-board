'use client'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import styles from './MeetingCard.module.css'
import { updateMeeting } from './actions';

interface Props {
    meetingId: string | number;
}

const MeetingButton = (props: Props) => {
  return (
    <div>MeetingButtons</div>
  )
}



const MeetingButtons = (props: Props) => {
    return (
        <span className={styles.meetingCard__butons}>
            <span className={styles.meetingCard__butons_done}>
                <IconButton aria-label="add new meeting" color="inherit" onClick={
                    ()=>{updateMeeting(
                        { 
                            meetingId: props.meetingId, 
                            keys_values: [
                              { key: "statusID", value: "1" } 
                            ] 
                          }
                    )}

                }>
                    <DoneIcon  sx={{ fontSize: 20 }}/>
                </IconButton>  
            </span>
            
            <span className={styles.meetingCard__butons_cancel}>
                <IconButton aria-label="add new meeting" color="inherit" 
                onClick={
                    ()=>{updateMeeting(
                        { 
                            meetingId: props.meetingId, 
                            keys_values: [
                              { key: "statusID", value: "2" } 
                            ] 
                          }
                    )}

                }
                >
                    <CloseIcon  sx={{ fontSize: 20 }}/>
                </IconButton>
            </span>

        </span>
        
    )
}


export {MeetingButton, MeetingButtons}