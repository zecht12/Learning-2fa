import Credential from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";

export default {
providers:[
    Credential({
        async authorize(credentials)  {
            const validatedField = LoginSchema.safeParse(credentials);
            if (validatedField.success) {
                const {email, password}= validatedField.data;
                const user = await getUserByEmail()
            }
        }
    })
]
} satisfies NextAuthConfig