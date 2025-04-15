
import { NextResponse } from "next/server";

import { AiIdea } from "@/config/AImodel";
export async function POST(req) {

    const { prompt } = await req.json();

    try {
        const result = await AiIdea(prompt)
        return NextResponse.json(JSON.parse(result.response.text()))
    }
    catch (e) {
        return NextResponse.json({ error: e })
    }

}