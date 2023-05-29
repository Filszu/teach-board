import { NextRequest } from "next/server"
import { db_pool } from "@/utils/dbConnection"


export async function GET(req:NextRequest){
    console.log('get lessons')

    
    const {searchParams} = new URL(req.nextUrl)
    const meetingStatusParam = searchParams.get('meetingStatus')


    let meetingStatus=0;
    if(meetingStatusParam){
    if(Number(meetingStatusParam)>=1 && Number(meetingStatusParam)<=3){
        meetingStatus = Number(meetingStatusParam);
        console.log('meetingStatus',meetingStatus)
    }
    }



    try {

    const connection = await db_pool.promise().getConnection();

    const sqlQuery =  `Select * from lessons WHERE 1=1${meetingStatus!==0?" AND statusID="+meetingStatus:""}`;
    console.log(sqlQuery)
    const [rows, fields] = await connection.execute(sqlQuery)

    const selectedLessons = rows;

    connection.release();

    // console.log(selectedLessons, '\n\n')
        return new Response(JSON.stringify(
            selectedLessons),{
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