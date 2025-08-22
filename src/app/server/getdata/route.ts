import { NextResponse } from "next/server";
import { turso } from "../createClient";
import { ResultSet } from "@libsql/client";


export async function GET(){

    try {
        const res: ResultSet | NextResponse =  await turso.execute("SELECT * FROM reviews")
        .then((data)=> {
            return NextResponse.json(
                {data: data.rows},
                {status: 200}
            )
        }).catch((error)=> {
            return NextResponse.json(
                {error: error},
                {status: 400}
            )
        })

        const res_json = await res.json()
        return NextResponse.json(
            {data: res_json.data},
            {status: res.status}
        )
    }catch(error){
        return NextResponse.json(
            {
                error: 'error caught!',
                status: 400
            }
        )
    }
}