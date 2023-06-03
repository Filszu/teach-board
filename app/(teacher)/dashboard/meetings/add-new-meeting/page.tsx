import { MeetingForm } from '@/components';
import styles from './page.module.css'
import { Meeting, Student } from '@/types/types';
import axios from 'axios';


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

    const students: Student[] = await getStudents();
    // console.log(students);

    
    return (
        <>
            <section className={styles.meetingForm}>
                <h2>Add new meeting</h2>
                <MeetingForm students={students} 
                // postNewMeeting={postNewMeeting}
                />
            </section>
            
        </>
    )
}

export default Page