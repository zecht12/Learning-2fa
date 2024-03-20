import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({message:"Email diperlukan untuk login"}),
    password: z.string(),
})