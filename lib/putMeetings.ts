import { Meeting } from "@/types/types";
import { db_pool } from "@/utils/dbConnection";

interface Props {
    meetingId: string | number;
    //column names and values to update
    columsToUpadte: {key:string, value:string}[];
}
export async function putMeeting(props: Props) {
    console.log('db fun ^^^^^^^^')
    console.log('props:', props)


    const meetingId = props.meetingId;
    const keys_values = props.columsToUpadte;

    console.log('meetingId:', meetingId)
    console.log('keys_values:', keys_values)

    const connection = await db_pool.promise().getConnection();
    // INSERT INTO lessons
    //   (id, studentID, statusID, paymentStatusID, duration, dateTime, satisfaction, notes)
    //   VALUES
    //   (null, ?, ?, ?, ?, ?, ?, ?);
    let query = `
      UPDATE lessons SET 
      ${keys_values.map((key_value) => `${key_value.key} = ?`).join(', ')}
      where id = ${props.meetingId}
      
    `;

    

    console.log('========query:', query);
    
    const values = keys_values.map((key_value) => key_value.value);
    
    const qResult = await connection.execute(query, values);
    console.log('result:', qResult);
    //last iseredId 

    // const qqResult:any = qResult
    // const lastInsertedId = qqResult[0].insertId;
    // console.log('lastInsertedId:', lastInsertedId);

    // const [qResult2] = await connection.execute(`SELECT * from lessons WHERE id = LAST_INSERT_ID()`);
    // console.log('result2:', qResult2);
   
    
    
    connection.release();

    return { success: true};
  
}