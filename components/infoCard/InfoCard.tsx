import styles from './InfoCard.module.css';

interface Props {
  sheduledMeetings: number | null;
}
export default function InfoCard(props: Props) {
  
  let meetingsToday = 0;
  if(props.sheduledMeetings){
    meetingsToday = props.sheduledMeetings;
  }

  // get current date day
  const date = new Date();
  const day = date.getDay();
  const dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  const dayOfWeek = dayList[day];
  // get current date month
  const month = date.getMonth();
  const monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const currentMonth = monthList[month];

  return (
    <section className={styles.infoCard}>
      <div className={styles.infoCard__month}>
        <p>{currentMonth}</p>
      </div>
      <div className={styles.infoCard__day}>
        <p>{day}</p>
      </div>
      <div className={styles.infoCard__dayOfWeek}>
        <p>{dayOfWeek}</p>
      </div>
      <div className={styles.infoCard__meetings}>
        <p>⏰<br/>Meetings Today: </p>
        <p className={styles.infoCard__meetings__count}>
          {/* <MeetingsToday/> */}
          0
        </p>
      </div>



    </section>
  );
}