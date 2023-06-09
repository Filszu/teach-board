'use client'
import { MeetingCard, MeetingCardSkeleton } from '@/components';
import { Meeting } from '@/types/types';
import React from 'react'

type Props = {
    // getLatestMeetings: () => Promise<Meeting[]>
    latestMeetings:Meeting[]|null;
}

// async function getLatestMeetings() {
//     const res = await fetch('http://localhost:3000/api/meetings?meetingStatus=3&showKeysNames=true&orderBy=dateTime',{ 
//     // next: { revalidate: 10},
//       cache: 'no-store'
//     });
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.

//     // Recommendation: handle errors
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data');
//     }

//     const meetings:Meeting[] = await res.json();

//     return meetings;
//   }

const LatestMeetings = (props: Props) => {
    // destructure props
    // const { getLatestMeetings } = props;
    // const latestMeetings:Meeting[] = await getLatestMeetings();
    // console.log('latestMeetings',latestMeetings);
    const { latestMeetings } = props;
  return (
    <>
    {/* <MeetingCardSkeleton/> */}
     {latestMeetings&&latestMeetings.map((meeting:Meeting, index:number)=>{
              return <MeetingCard key={meeting.id} cardDetails={meeting} cardIndex={index+1} />
            })}
    </>
  )
}

export default LatestMeetings