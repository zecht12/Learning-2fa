import { db } from "@/lib/db";



export const getUserByEmail = async (email : string) => {
    try {
        const user = await db.user.findUnique({w})
    } catch {
        return null
    }
}