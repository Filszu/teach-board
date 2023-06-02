import { MeetingForm } from '@/components';
import styles from './page.module.css'


interface Props {
}


const Page = async(props: Props) => {

    function postNewMeeting() {
        console.log('postNewMeeting');
    }
    return (
        <>
            <section className={styles.meetingForm}>
                <h2>Add new meeting</h2>
                <MeetingForm/>
            </section>
            
        </>
    )
}

export default Page