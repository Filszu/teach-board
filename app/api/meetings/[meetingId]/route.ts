export async function GET(
    request: Request,
    {
      params,
    }: {
      params: { meetingId: string };
    },
  ) {
    const slug = params.meetingId; 
    return new Response(JSON.stringify(
        slug),{
        status:200,
    })

    
  }