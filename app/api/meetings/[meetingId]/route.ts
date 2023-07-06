import { getMeeting } from "@/lib/getMeeting";
import { putMeeting } from "@/lib/putMeetings";
import { Meeting } from "@/types/types";


//add restrictred to sign in users with next auth
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

export async function PUT(
  request: Request,
  {
    params,
  }: {
    params: { meetingId: string };
  },){
    const req = await request.json();

    console.log('***put lesson***')
    console.log(req)

    const mId:string = params.meetingId; 
    // console.log('meetingId:', meetingId)
    
    try{

      await putMeeting({ 
        meetingId: mId, 
        columsToUpadte: req.columsToUpdate
      }
      );
        return new Response(JSON.stringify(
            {"msg":"succes"}),{
            status:200,
        })
    }
    catch(error){
        console.log(error)
        return new Response(JSON.stringify(
            {msg:"Error fetching data from database" }),{
            status:500,
        })
    }

}
