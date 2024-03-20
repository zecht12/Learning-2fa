import Credential from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas";

export default {
providers:[
    Credential({
        const async authorize(credentials)  {
            const validatedField = LoginSchema.safeParse(credentials);
            if (validatedField.success) {
                const {email, password}= validatedField.data;
            }
        }
    })
]
} satisfies NextAuthConfig