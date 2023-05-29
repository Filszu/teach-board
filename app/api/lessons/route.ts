import { NextRequest } from "next/server"
import { db_pool } from "@/utils/dbConnection"

export async function GET(req:NextRequest){
    // console.log('get lessons')

    
    const {searchParams} = new URL(req.nextUrl)
    const lessonStatusParam = searchParams.get('lessonStatus')
    const limit = searchParams.get('limit')

    


    try {

    const connection = await db_pool.promise().getConnection();

    const [rows, fields] = await connection.execute(`Select * from lessons ${limit&&`LIMIT=`+limit}`)

    connection.release();

    // console.log(rows, '\n\n')
        return new Response(JSON.stringify(
            {rows }),{
            status:200,
        }
        )
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify(
            {msg:"Error fetching data from database" }),{
            status:500,
        })
    }

    

    
}