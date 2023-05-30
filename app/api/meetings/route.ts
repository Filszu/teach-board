import { NextRequest } from "next/server"
import { db_pool } from "@/utils/dbConnection"


export async function GET(req:NextRequest){
    // console.log('get lessons')

    
    const {searchParams} = new URL(req.nextUrl)
    const meetingStatusParam = searchParams.get('meetingStatus')
    const showKeysNames:boolean = (searchParams.get('showKeysNames')?.toLowerCase?.() === 'true');


    let meetingStatus=0;
    if(meetingStatusParam){
    if(Number(meetingStatusParam)>=1 && Number(meetingStatusParam)<=3){
        meetingStatus = Number(meetingStatusParam);
        console.log('meetingStatus',meetingStatus)
    }
    }





    try {

    const connection = await db_pool.promise().getConnection();


    let sqlQuery =  `Select * from lessons WHERE 1=1${meetingStatus!==0?" AND statusID="+meetingStatus:""}`;
    if(showKeysNames){
        sqlQuery = `
        SELECT l.*, s.name AS student_name, s.surname AS student_surname,
        ls.status AS lesson_status, ps.status AS payment_status
        FROM lessons AS l 
        JOIN students AS s ON l.studentID = s.id
        JOIN lessons_statuses AS ls ON l.statusID = ls.id
        JOIN payment_statuses AS ps ON l.paymentStatusID = ps.id
        WHERE 1=1 ${meetingStatus!==0?" AND statusID="+meetingStatus:""}
        ;
        `;
    }

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