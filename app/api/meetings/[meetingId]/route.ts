import { getMeeting } from "@/lib/getMeeting";
import { Meeting } from "@/types/types";

export async function GET(
    request: Request,
    {
      params,
    }: {
      params: { meetingId: string };
    },
  ) {
    const slug:string = params.meetingId; 

    try{
      const meeting = await getMeeting({meetingId:slug}) as Meeting[];

      if(meeting){

      
        if(meeting.length === 0){
          return new Response(JSON.stringify(
            {msg:"Meeting this this id does not exist" }),{
            status:404,
        })
        }
        return new Response(JSON.stringify(
          meeting),{
          status:200,
          })
      }
    }
    catch(error){
      console.log(error)
      return new Response(JSON.stringify(
          {msg:"Error fetching data from database" }),{
          status:500,
      })
    }
    

    
  }
