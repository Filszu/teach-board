'use client'
import { Meeting } from "@/types/types"
// import { Paper } from "@mui/material"
// interface Props extends Lesson{

// }

import styles from './MeetingCard.module.css'
interface Props {
    cardType?: string,
    cardDetails?: Meeting

}

const MeetingCard = (props: Props) => {
  return (
    <>
        <div className={styles.meetingCard}>
            zzzz
        </div>
    </>
  )
}

export default MeetingCard