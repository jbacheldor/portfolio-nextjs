import { NextRequest, NextResponse } from "next/server";
import { turso } from "../createClient";

export async function POST(request: NextRequest){
    const form = await request.json()
    try {
        const res = await turso.execute({
            sql: "INSERT INTO reviews (name, review, date, relation, company, rating) VALUES (?, ?, ?, ?, ?, ?)",
            args: [form.name, form.review, form.date, form.relation, form.company, form.rating]
        })
        .then((data)=> {
            return NextResponse.json(
                {data: data.rows},
                {status: 200}
            )
        })
        .catch((error) => {
            console.log('error !!! in execute')
            return NextResponse.json(
                {error: error},
                {status: 400}
            )
        })

        const data = await res.json()
        return NextResponse.json({
            data: data.data,
            status: res.status
        })


    }catch(error){
        console.log('error of error', error)
        return NextResponse.json(
            {error: 'weewooowhooooo, big big error!'},
            {status: 400}
        )
    }

}