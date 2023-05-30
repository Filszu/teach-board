import { NextRequest } from "next/server"


export async function GET(req:NextRequest){
    console.log('get lessons')

    
    const {searchParams} = new URL(req.nextUrl)
    const lessonStatusParam = searchParams.get('lessonStatus')

    console.log(lessonStatusParam)

    

    return new Response(JSON.stringify(
        {msg:"get lessons" }),{
        status:200,
    }
    )
}

export async function POST(req:NextRequest){
    const body = await req.json()
    console.log('post lessons',body)
    return 'post lessons'
}
