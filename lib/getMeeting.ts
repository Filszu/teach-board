import { db_pool } from "@/utils/dbConnection";

interface Props {
    meetingId: string;
}
export async function getMeeting(props:Props) {
    const connection = await db_pool.promise().getConnection();
    const sqlQuery = `
    SELECT l.*, s.name AS student_name, s.surname AS student_surname,
    ls.status AS lesson_status, ps.status AS payment_status
    FROM lessons AS l 
    JOIN students AS s ON l.studentID = s.id
    JOIN lessons_statuses AS ls ON l.statusID = ls.id
    JOIN payment_statuses AS ps ON l.paymentStatusID = ps.id
    WHERE l.id = ${props.meetingId}
    LIMIT 1
    ;
    `;
    const [rows, fields] = await connection.execute(sqlQuery)
    const selectedMeeting = rows;
    connection.release();
    return selectedMeeting;
}