import { getMeeting } from "@/lib/getMeeting";

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
      const meeting = await getMeeting({meetingId:slug});
      return new Response(JSON.stringify(
        meeting),{
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
