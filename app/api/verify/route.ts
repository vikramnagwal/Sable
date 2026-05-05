import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
        const { searchParams } = new URL(request.url)
        const token = searchParams.get("token")
}