import { db_pool } from "@/utils/dbConnection";

export async function getStudents() {
    const connection = await db_pool.promise().getConnection();
    const [rows, fields] = await connection.execute(`Select * from students`)
    const selectedStudents = rows;
    connection.release();
    return selectedStudents;
}