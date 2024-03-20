import { db } from "@/lib/db";



export const getUserByEmail = async (email : string) => {
    try {
        const user = await db.user.findUnique({where:{email}})
    } catch {
        return null
    }
}
export const getUserById = async (email : string) => {
    try {
        const user = await db.user.findUnique({where:{email}})
    } catch {
        return null
    }
}