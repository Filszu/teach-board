import { Meeting } from "@/types/types";
import axios from "axios";

export async function postMeeting(meeting:Meeting) {
    
    let udateTime = '';
    if(meeting.dateTime){
        const dt = meeting.dateTime.toString();
        udateTime = new Date(dt).toISOString().slice(0, 19).replace('T', ' ');
    }else{
        udateTime= new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
    console.log('dateTime:',  udateTime)

    const newMeeting = {
        ...meeting,
        dateTime: udateTime
    }


    // console.log('postNewMeeting:',meeting);
    try {
        const response = await axios.post('http://localhost:3000/api/meetings', {meeting});
        console.log('Meeting created:', response.data);
      } catch (error) {
        throw new Error('Failed to post data');
      }

    
}