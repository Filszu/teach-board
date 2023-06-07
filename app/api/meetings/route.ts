import { NextRequest, NextResponse } from "next/server"
import { db_pool } from "@/utils/dbConnection"
import { fakeDelay } from "@/utils/fakeDelay"
import { Meeting } from "@/types/types"
import { postNewMeeting } from "@/lib/postNewMeeting"


export async function GET(req:NextRequest){
    console.log('***get lessons***')

    
    const {searchParams} = new URL(req.nextUrl)
    const meetingStatusParam = searchParams.get('meetingStatus')
    // const showKeysNames:boolean = (searchParams.get('showKeysNames')?.toLowerCase?.() === 'true');
    const showKeysNames:boolean = true;
    const orderBy:string = searchParams.get('orderBy') || 'id';
    const arrange:string = searchParams.get('arrange') || 'DESC';
    const limit:number = Number(searchParams.get('limit')) || 10;
    // const id:number = Number(searchParams.get('id'));
    const ids = searchParams.get('ids')?.split(',').map(Number) || [];

    console.log(searchParams)


    let meetingStatus=0;
    if(meetingStatusParam){
    if(Number(meetingStatusParam)>=1 && Number(meetingStatusParam)<=3){
        meetingStatus = Number(meetingStatusParam);
        // console.log('meetingStatus',meetingStatus)
    }
    }


    


    try {
        
    

    const connection = await db_pool.promise().getConnection();

    // await fakeDelay(1000);
    

    let sqlQuery =  `Select * from lessons WHERE 1=1${meetingStatus!==0?" AND statusID="+meetingStatus:""}`;
    // if(showKeysNames){
    //     sqlQuery = `
    //     SELECT l.*, s.name AS student_name, s.surname AS student_surname, ls.status AS lesson_status, ps.status AS payment_status FROM lessons AS l JOIN students AS s ON l.studentID = s.id JOIN lessons_statuses AS ls ON l.statusID = ls.id JOIN payment_statuses AS ps ON l.paymentStatusID = ps.id WHERE 1=1 AND l.id=82;

    //     ;
    //     `;
    // }
    if(showKeysNames){
        sqlQuery = `
        SELECT l.*, s.name AS student_name, s.surname AS student_surname,
        ls.status AS lesson_status, ps.status AS payment_status
        FROM lessons AS l 
        JOIN students AS s ON l.studentID = s.id
        JOIN lessons_statuses AS ls ON l.statusID = ls.id
        JOIN payment_statuses AS ps ON l.paymentStatusID = ps.id
        WHERE 1=1 ${meetingStatus!==0?" AND statusID="+meetingStatus:""} ${ids.length>0?" AND l.id IN ("+ids.join(',')+")":""}
        ORDER BY l.${orderBy} ${arrange}
        LIMIT ${limit}

        ;
        `;
    }

    // console.log(sqlQuery)
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



export async function POST(request: Request){
    console.log('***post lesson***')
    const meeting = await request.json();
    // console.log(req.body)
    // console.log(meeting)

    
    
    
    try{

        const newMeeting = await postNewMeeting(meeting);

        return new Response(JSON.stringify(
            newMeeting),{
            status:200,
        }
        )
        // return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    catch(error){
        console.log(error)
        return new Response(JSON.stringify(
            {msg:"Error fetching data from database" }),{
            status:500,
        })
    }
}