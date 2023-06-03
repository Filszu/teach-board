import { NextRequest } from "next/server"
import { db_pool } from "@/utils/dbConnection"
import { fakeDelay } from "@/utils/fakeDelay"
import { getStudents } from "@/lib/getStudents"


export async function GET(req:NextRequest){
    console.log('***get students***')

    
    const {searchParams} = new URL(req.nextUrl)
    // const studentStatus = searchParams.get('studentStatus')    


    try {
    

    // await fakeDelay(1000);
    const selectedStudents = await getStudents();  

    // console.log(selectedLessons, '\n\n')
        return new Response(JSON.stringify(
            selectedStudents),{
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

