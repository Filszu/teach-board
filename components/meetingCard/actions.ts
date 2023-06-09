'use server'
import { Meeting } from "@/types/types";
import axios from "axios";

//update meeting

interface Props {
    meetingId: string;
    //column names and values to update
    keys_values: {key:string, value:string}[]; 
}
export async function updateMeeting(props: Props) {
    // 'use server'
    const meetingId = props.meetingId;
    const columsToUpdate = props.keys_values;
    console.log('meetingId:', meetingId)
    // const response = await axios.get(`http://localhost:3000/api/meetings/${meetingId}`);
    // put
    const response = await axios.put(`http://localhost:3000/api/meetings/${meetingId}`, {columsToUpdate});
    const meeting = response.data[0];
    console.log('meeting:', meeting)
    return meeting;
}
