import { db } from "@/lib/db";



export const getUserByEmail = async (email : string) => {
    try {
        const user = await db.user.f
    } catch {
        return null
    }
}