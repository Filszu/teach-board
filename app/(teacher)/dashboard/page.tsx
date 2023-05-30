import { InfoCard, MeetingCard} from '@/components'
import styles from './page.module.css'

import Image from 'next/image'
import { Meeting } from '@/types/types';


type Props = {}

async function getLatestMeetings() {
  const res = await fetch('http://localhost:3000/api/meetings?meetingStatus=3&showKeysNames=true&orderBy=dateTime',{ 
  next: { 
    revalidate: 10
    },
    // cache: 'no-store'
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}
 

const Page = async(props: Props) => {
  const latestMeetings:Meeting[] = await getLatestMeetings();
  console.log('latestMeetings',latestMeetings);

  return (
        <>
          <section className={styles.infoBox}>
            <InfoCard/>
            
          </section>
          <section 
            className={styles.meetingReminderContainer}
          >
            {latestMeetings&&latestMeetings.map((meeting:Meeting, index:number)=>{
              return <MeetingCard key={meeting.id} cardDetails={meeting} cardIndex={index+1} />
            })}
             {/* <MeetingCard /> */}
          </section>
        </>  
     
  )
}

export default Page