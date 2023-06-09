'use server'
import { db_pool } from "@/utils/dbConnection";
import { Teacher } from "@/types/types";
interface Props {
    condition:{key:string, value:string};
}
export async function getUser(props: Props) {
    const connection = await db_pool.promise().getConnection();
    const sqlQuery = `
    SELECT name, surname, nickname, profileStatus, phone_number, notes, image, email, description, joinedDate, uuAccountID FROM teachers WHERE ${props.condition.key} = "${props.condition.value}"

    ;

    `;
    // uuAccountID = "${userId}"

    // console.log(sqlQuery);
    const [rows, fields] = await connection.execute(sqlQuery)
    const selectedUser = rows as Array<Teacher>;
    console.log('selectedUser:', selectedUser);
    connection.release();
    // const su:Teacher = selectedUser[0]!;
    
    return selectedUser[0];
    // const UserOBJ= JSON.stringify(selectedUser);
    // return UserOBJ;
}