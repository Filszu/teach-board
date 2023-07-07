import { InfoCard, LoadingBox, MeetingCard, MeetingCardSkeleton} from '@/components'
import styles from './page.module.css'

import Image from 'next/image'
import { Meeting } from '@/types/types';
import { Suspense } from 'react';
import LatestMeetings from './LatestMeetings';
import Link from 'next/link';
import axios from 'axios';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';



type Props = {}

export const revalidate = 10; 
// export const dynamic = 'force-dynamic'
// export const dynamic = 'auto' // default

async function getLatestMeetings() {
  // const res = await fetch('http://localhost:3000/api/meetings?meetingStatus=3&showKeysNames=true&orderBy=dateTime&arrange=ASC&limit=15',{ 
  //   cache: 'no-store',
  //   next: { revalidate: 10},
    
  // });
  const res = await axios.get(`http://localhost:3000/api/meetings?meetingStatus=3&showKeysNames=true&orderBy=dateTime&arrange=ASC&limit=15`,{
    responseType: "json",
  }) 

 
  
  // Recommendation: handle errors
  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const meetings:Meeting[] = await res.data;
 
  return meetings;
}
 

const Page = async(props: Props) => {

  const session = await getServerSession(authOptions)

  if(!session){
    // return (<h1>Not Authenticated</h1>);
    redirect('api/auth/signin?callbackUrl=/dashboard');
  } 
  
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
            <Suspense fallback={<MeetingCardSkeleton/>}>
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