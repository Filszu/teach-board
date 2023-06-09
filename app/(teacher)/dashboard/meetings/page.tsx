import axios from "axios"
import MeetingsBox from "./components/MeetingsBox"
import { Meeting } from "@/types/types"
type Props = {}

export const revalidate = 10; 

const Page = async(props: Props) => {

  async function getMeeting() {
    
    //  add sotring and order by later
    const res = await axios.get(`http://localhost:3000/api/meetings`,{
       responseType: "json",
    }) 

    const meetingData:Meeting[] = res.data;
    return meetingData

  }
    
  const meetingData:Meeting[] = await getMeeting();
    
  

  return (
    <section style={{gridColumn:"1/13"}}>
      <h2>Your Meetings: </h2>
      <MeetingsBox meetings={meetingData}
      />
     

    </section>
  )
}

export default Page