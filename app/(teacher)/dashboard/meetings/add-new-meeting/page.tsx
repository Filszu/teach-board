import { MeetingForm } from '@/components';
import styles from './page.module.css'
import { Meeting, Student } from '@/types/types';
import axios from 'axios';
import { postMeeting } from '@/components/forms/postMeeting';
import { revalidate } from '../[id]/page';
import { revalidatePath } from 'next/cache';


interface Props {
}

async function getStudents(){
    const res = await fetch('http://localhost:3000/api/students');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

// async function postNewMeeting(meeting: Meeting) {
//     console.log('postNewMeeting');
//     try {
//         const response = await axios.post('http://localhost:3000/api/meetings', meeting);
//         console.log('Meeting created:', response.data);
//       } catch (error) {
//         throw new Error('Failed to post data');
//       }
// }



const Page = async(props: Props) => {

    const submitData = async(meeting:Meeting) => {
        'use server'
        // event.preventDefault();
      
        const meetingUrl = await postMeeting(meeting);
        console.log(meetingUrl)
        // router.push(meetingUrl)
        // redirect('/login');
        revalidatePath('dashboard/meetings/85')
        // onSubmit(meeting);
      };

    const students: Student[] = await getStudents();
    // console.log(students);

    
    return (
        <>
            <section className={styles.meetingForm}>
                <h2>Add new meeting</h2>
                <MeetingForm students={students} submitData={submitData} 
                // postNewMeeting={postNewMeeting}
                />
            </section>
            
        </>
    )
}

export default Page