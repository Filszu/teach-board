import { Meeting } from "@/types/types";
import axios from "axios";
// import { redirect } from "next/navigation"
// import { useRouter } from "next/router"

export async function postMeeting(meeting:Meeting) {
    
    let updatedTime = '';
    if(meeting.dateTime){
        const dt = meeting.dateTime.toString();
        updatedTime = new Date(dt).toISOString().slice(0, 19).replace('T', ' ');
    }else{
        updatedTime= new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
    console.log('dateTime:',  updatedTime)

    // const uMeeting:Meeting = {
    //     ...meeting,
    //     dateTime: updatedTime
    // }

    // console.log('newMeeting:', uMeeting)

    meeting.dateTime = updatedTime;
    console.log('uMeeting:', meeting)
   


    // console.log('postNewMeeting:',meeting);
    try {
        const response = await axios.post('http://localhost:3000/api/meetings', {meeting});
        console.log('Meeting created:', response.data);
        const meetingUrl = `/meetings/${response.data.rowID}`;
        console.log('meetingUrl:', meetingUrl);
        return meetingUrl;
        // return response;

        

        // redirect(meetingUrl);
      } catch (error) {
        throw new Error('Failed to post data');
      }

    
}