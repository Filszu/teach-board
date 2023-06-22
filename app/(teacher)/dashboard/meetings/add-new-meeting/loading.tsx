import { LoadingBox, MeetingCardSkeleton } from "@/components";
import { Skeleton } from "@mui/material";

export default function Loading() {
    // Or a custom loading skeleton component
    return (
      

    <section style={{gridColumn:"1/13", display:"flex", justifyContent:"center"}}>
    <div style={{minWidth:"10px"}}></div><LoadingBox />
    </section>
        
        
    );
}