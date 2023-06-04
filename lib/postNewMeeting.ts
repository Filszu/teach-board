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
    let query = `
      INSERT INTO lessons
      (id, studentID, statusID, paymentStatusID, duration, dateTime, satisfaction, notes)
      VALUES
      (null, ?, ?, ?, ?, ?, ?, ?);
      
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
    // console.log('values:', values);

    // const [result] = await connection.query(query, values);
    const qResult = await connection.execute(query, values);
    console.log('result:', qResult);
    //last iseredId 

    const qqResult:any = qResult
    const lastInsertedId = qqResult[0].insertId;
    console.log('lastInsertedId:', lastInsertedId);

    // const [qResult2] = await connection.execute(`SELECT * from lessons WHERE id = LAST_INSERT_ID()`);
    // console.log('result2:', qResult2);
   
    
    
    connection.release();

    return { success: true, rowID: lastInsertedId };
  
}