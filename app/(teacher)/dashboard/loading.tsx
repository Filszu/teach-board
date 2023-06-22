import { LoadingBox, MeetingCardSkeleton } from "@/components";
import { Skeleton } from "@mui/material";

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        // <section style={{width: '100%',display:'flex', justifyItems:'center', alignItems:'center', textAlign:"center", gridColumn:"2/13"}}>
        //     {/* Loading...!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        //     <div>loading</div>
        //     <LoadingBox />
            
        // </section>
        <section style={{gridColumn:"4/13"}}>
            {/* <div style={{minWidth:"10px"}}></div><LoadingBox /> */}
            
            <MeetingCardSkeleton/>
            
        </section>

    // <section style={{gridColumn:"1/13", display:"flex", justifyContent:"center"}}>
    // <div style={{minWidth:"10px"}}></div><LoadingBox />
    // </section>
        
        
    );
}