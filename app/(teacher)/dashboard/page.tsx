import { InfoCard, LoadingBox, MeetingCard} from '@/components'
import styles from './page.module.css'

import Image from 'next/image'
import { Meeting } from '@/types/types';
import { Suspense } from 'react';
import LatestMeetings from './LatestMeetings';
import Link from 'next/link';



type Props = {}

async function getLatestMeetings() {
  const res = await fetch('http://localhost:3000/api/meetings?meetingStatus=3&showKeysNames=true&orderBy=dateTime&arrange=ASC&limit=15',{ 
  next: { revalidate: 10},
    // cache: 'no-store'
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const meetings:Meeting[] = await res.json();
 
  return meetings;
}
 

const Page = async(props: Props) => {
  const latestMeetings:Meeting[] = await getLatestMeetings();
  // console.log('latestMeetings',latestMeetings);

  return (
        <>
          <section className={styles.infoBox}>
            <InfoCard sheduledMeetings={latestMeetings}/>
            
          </section>
          <section 
            className={styles.meetingReminderContainer}
          >
            {
              //meetings < 1
              (latestMeetings.length < 1)&& <h2>Create new <Link href="dashboard/meetings/add-new-meeting">meeting</Link></h2>
             

            }
            {/* <Suspense fallback={<p>Loading🕛</p>}> */}
            <Suspense fallback={<LoadingBox/>}>
              <LatestMeetings 
              // getLatestMeetings={getLatestMeetings} 
                latestMeetings={latestMeetings}
              />
            </Suspense>
          </section>
        </>  
     
  )
}

export default Page