import axios from 'axios';
import styles from './page.module.css'
import { notFound, redirect } from "next/navigation"
import { Meeting } from '@/types/types';
import { MeetingCard } from '@/components';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const revalidate = 60; 

export default async function Page(
    { 
        params,
        searchParams
    }: {
         params: { id: string },
        //  searchParams: URLSearchParams
        searchParams?: { [key: string]: string | string[] | undefined };
    }) {

        
    const session = await getServerSession(authOptions)
    if(!session){
      redirect('../../api/auth/signin');
    } 
    
    const meetingId = params.id;
    // const searchParams = searchParams;
    //pramas
    // console.log('params',params);


    //axios fecthing meeting data
    //revqalidating every 10 seconds
    // notFound()

    // let meetingData:Meeting[];
    let meetingData:any;
    try{
       meetingData = await axios.get(`http://localhost:3000/api/meetings/${meetingId}`,{
        responseType: "json",
      }) 
    // fetch
    // const res = await fetch(`http://localhost:3000/api/meetings/${meetingId}`,{
    //     next: { revalidate: 10},
    //     // cache: 'no-store'
    //     });
        
    }
    catch(err){
        notFound()
    
    }
    

    //if not found redirect to 404
    // if(!meetingData) {
    //     console.log('meeting '+meetingId+'not found');
    //     notFound()
    // }


    // //get search params js
    // const searchParams = new URLSearchParams(window.location.search);
    // console.log('searchParams',searchParams);

    
    console.log('searchParams',searchParams);
    console.log('searchParams',searchParams?.displayMode);
    // console.log('meetingData',meetingData);
    console.log('meetingData',meetingData.data[0]);

    const meeting:Meeting = meetingData.data[0];
    
    

    return (
        <section className={styles.meetingsContainer}>

            { (searchParams?.displayMode=="edit")?<h2>Edit your meeting</h2>:""}
            { (searchParams?.displayMode=="new")?<h2>Created new Meeting</h2>:""}
            {
                meetingData &&<MeetingCard cardDetails={meeting} cardIndex={1}/>
            }
            
            {/* <h2>Meeting {meetingId}</h2> */}
        </section>
    )
  }