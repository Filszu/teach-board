'use server'
import { Meeting } from "@/types/types";
import axios from "axios";
import { revalidatePath } from "next/cache";

//update meeting

interface Props {
    meetingId: string | number;
    //column names and values to update
    keys_values: {key:string, value:string}[]; 
}
export async function updateMeeting(props: Props) {
    // 'use server'
    const meetingId = props.meetingId;
    const columsToUpdate = props.keys_values;
    console.log('meetingId:', meetingId)
    console.log('columsToUpdate:', columsToUpdate)
    

    // const response = await axios.put(`http://localhost:3000/api/meetings/${meetingId}`, {columsToUpdate});
    const res = await axios.put(`http://localhost:3000/api/meetings/${meetingId}`, {columsToUpdate});

    revalidatePath(`/dashboard`)
    revalidatePath(`/dashboard/meetings`)
    revalidatePath(`/dashboard/meetings/${meetingId}`)
    // const meeting = response.data[0];
    // console.log('meeting:', meeting)
    // return meeting;
}
