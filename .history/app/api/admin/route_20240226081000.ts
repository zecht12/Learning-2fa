import { currentRole } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
    const role = await currentRole();

    if (role === ) {
        
    }

    return new NextResponse(null, {status: 403})
}