'use client'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import styles from './MeetingCard.module.css'

interface Props {}

const MeetingButton = (props: Props) => {
  return (
    <div>MeetingButtons</div>
  )
}

const MeetingButtons = (props: Props) => {
    return (
        <span className={styles.meetingCard__butons}>
            <span className={styles.meetingCard__butons_done}>
                <IconButton aria-label="add new meeting" color="inherit" >
                    <DoneIcon  sx={{ fontSize: 20 }}/>
                </IconButton>  
            </span>
            
            <span className={styles.meetingCard__butons_cancel}>
                <IconButton aria-label="add new meeting" color="inherit" >
                    <CloseIcon  sx={{ fontSize: 20 }}/>
                </IconButton>
            </span>

        </span>
        
    )
}


export {MeetingButton, MeetingButtons}