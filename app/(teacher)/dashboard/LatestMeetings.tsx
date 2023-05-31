'use client'
// to avoid hydration error
import { MeetingCard } from '@/components';
import { Meeting } from '@/types/types';
import { useEffect, useState } from 'react';


type Props = {
    // getLatestMeetings: () => Promise<Meeting[]>
}

async function getLatestMeetings() {
    const res = await fetch('http://localhost:3000/api/meetings?meetingStatus=3&showKeysNames=true&orderBy=dateTime',{ 
    // next: { revalidate: 10},
      cache: 'no-store'
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

const LatestMeetings = () => {
    // destructure props
    // const { getLatestMeetings } = props;
    // const latestMeetings:Meeting[] = await getLatestMeetings();

    const [latestMeetings, setLatestMeetings] = useState<Meeting[]>([]);
    useEffect(() => {
      async function fetchData() {
        try {
          const meetings: Meeting[] = await getLatestMeetings();
          setLatestMeetings(meetings);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }, []);
    
    console.log('latestMeetings',latestMeetings);
  return (
    <>
     {latestMeetings&&latestMeetings.map((meeting:Meeting, index:number)=>{
              return <MeetingCard key={meeting.id} cardDetails={meeting} cardIndex={index+1} />
            })}
    </>
  )
}

export default LatestMeetings