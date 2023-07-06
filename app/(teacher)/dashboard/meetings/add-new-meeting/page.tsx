// 'use server';
import { MeetingForm } from '@/components';
import styles from './page.module.css'
import { Meeting, Student } from '@/types/types';
import axios from 'axios';
import { postMeeting } from '@/components/forms/postMeeting';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


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

const redirectToMeeting = (id:string) => {
  try{
    // redirect('dashboard/meetings/'+id);
    redirect('/dashboard/meetings/129');
  }catch(error){
    console.log(error);
  }
    
}



const Page = async(props: Props) => {
  // redirect('dashboard/meetings/86');
    // const {data: session} = useSession({required: true});

    const session = await getServerSession(authOptions)

    // if(!session){
      // return (<h1>Not Authenticated</h1>);
      // redirect('../../api/auth/signin');
    // } 

    // const submitData = async(meeting:Meeting) => {
      async function submitData(meeting:Meeting) {
        'use server'
        // event.preventDefault();
      
       
        const meetingUrl = await postMeeting(meeting);
        // revalidatePath('/dashboard');
        redirect(`dashboard/meetings/${meetingUrl}?displayMode=new`);
    
        
       
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