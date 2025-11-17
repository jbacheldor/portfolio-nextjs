import { NextRequest, NextResponse } from "next/server";
import { turso } from "../createClient";

export async function POST(request: NextRequest){
    const form = await request.json()
    try {
        await turso.execute({
            sql: "INSERT INTO reviews (name, review, date, relation, company, rating) VALUES (?, ?, ?, ?, ?, ?)",
            args: [form.name, form.review, form.date, form.relation, form.company, form.rating]
        })
        .catch((error) => {
            console.log('error !!! in execute')
            return NextResponse.json(
                {error: error},
                {status: 400}
            )
        })

        return NextResponse.json({
            message: 'review submitted successfully',
            status: 200
        })

    }catch(error){
        console.log('error of error', error)
        return NextResponse.json(
            {error: 'weewooowhooooo, big big error!'},
            {status: 400}
        )
    }

}