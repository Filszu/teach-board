import { MeetingForm } from '@/components';
import styles from './page.module.css'
import { Student } from '@/types/types';


interface Props {
}

async function getStudents(){
    const res = await fetch('http://localhost:3000/api/students');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

async function postNewMeeting() {
    console.log('postNewMeeting');
}

const Page = async(props: Props) => {

    const students: Student[] = await getStudents();
    console.log(students);

    
    return (
        <>
            <section className={styles.meetingForm}>
                <h2>Add new meeting</h2>
                <MeetingForm students={students}/>
            </section>
            
        </>
    )
}

export default Page