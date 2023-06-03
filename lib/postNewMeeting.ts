import { Meeting } from "@/types/types";
import { db_pool } from "@/utils/dbConnection";

interface Props {
    meeting: Meeting;
}
export async function postNewMeeting(props: Props) {
    
    console.log('postNewMeeting:',props.meeting);
    console.log(props.meeting)
    console.log('####student id',props.meeting.studentID)
    const connection = await db_pool.promise().getConnection();
    const query = `
      INSERT INTO lessons
      (id, studentID, statusID, paymentStatusID, duration, dateTime, satisfaction, notes)
      VALUES
      (null, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const values = [
        props.meeting.studentID,
        props.meeting.statusID,
        props.meeting.paymentStatusID,
        props.meeting.duration,
        props.meeting.dateTime,
        props.meeting.satisfaction,
        props.meeting.notes,
    ];
    console.log('values:', values);

    await connection.query(query, values);
    connection.release();

    return { success: true };
  
}