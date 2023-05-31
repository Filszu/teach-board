import { LoadingBox } from "@/components";

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <section style={{width: '100%',display:'flex', justifyItems:'center', alignItems:'center'}}>
            <div>Loading...!!!<LoadingBox /></div>
            
        </section>
    );
}