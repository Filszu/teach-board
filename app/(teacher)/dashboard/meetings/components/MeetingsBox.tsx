'use client'
import { MeetingCard } from '@/components';
import { Meeting } from '@/types/types';

interface Props {
    meetings: Meeting[] | null;
}

const MeetingsBox = (props: Props) => {
  const { meetings } = props;
  return (
    <>
    {
      meetings&&meetings.map((meeting: Meeting, index: number) => {
        return <MeetingCard key={meeting.id} cardDetails={meeting} cardIndex={index+1} />
      })
    }
    </>
  )
}

export default MeetingsBox