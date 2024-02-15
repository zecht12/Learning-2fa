import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({message:"M"}),
    password: z.string()
})