import { Meeting } from '@/types/types';
import styles from './InfoCard.module.css';

interface Props {
  // sheduledMeetings: number | null;
  sheduledMeetings: Meeting[] | null;
}

function filterTodayMeetings(meetings: Meeting[], date:Date) {
  const todayMeetings = meetings.filter((meeting) => {
    const meetingDate = new Date(meeting.dateTime);
    return meetingDate.getDate() === date.getDate();
  }
  );
  return todayMeetings.length;
   
}

export default function InfoCard(props: Props) {
  
  

  // get current date day
  const date = new Date();
  const day = date.getDay();
  const dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  const dayOfWeek = dayList[day];
  // get current date month
  const month = date.getMonth();
  const monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const currentMonth = monthList[month];

  let meetingsToday = 0;
  if(props.sheduledMeetings){
    // meetingsToday = props.sheduledMeetings;
    meetingsToday = filterTodayMeetings(props.sheduledMeetings, date);
  }

  return (
    <section className={`anim__jumpIn ${styles.infoCard}`}>
      <div className={styles.infoCard__month}>
        <p>{currentMonth}</p>
      </div>
      <div className={styles.infoCard__day}>
        <p>{day}</p>
      </div>
      <div className={styles.infoCard__dayOfWeek}>
        <p>{dayOfWeek}</p>
      </div>
      <br />
      <div className={styles.infoCard__meetings}>
        <p>⏰Meetings Today: </p>
        <span className={styles.infoCard__meetings__count}>
        {meetingsToday}
        </span>
      </div>



    </section>
  );
}