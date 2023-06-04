import styles from './page.module.css'
export default function Page({ params }: { params: { id: string } }) {
    const meetingId = params.id;
    

    return (
        <section className={styles.meetingsContainer}>
            <h2>Meeting {meetingId}</h2>
        </section>
    )
  }