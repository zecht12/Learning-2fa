"use server";

import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { AuthError } from 'next-auth';
import { GenerateVerificationToken } from "@/lib/tokens";
import { getUserByEmail } from '@/data/user';

export const login = async (values : z.infer<typeof LoginSchema>) => {
    const validatedField = LoginSchema.safeParse(values);

    if (!validatedField.success) {
        return{error: "Terjadi kesalahan!"}
    };
    const {email, password} = validatedField.data;
    const exitingUser = await getUserByEmail(email);
    if (!exitingUser || !exitingUser.email || !exitingUser.password) {
        return {error: "Email tidak ada!"}
    }
    if (!exitingUser.emailVerified) {
        const verificationToken = await GenerateVerificationToken(exitingUser.email);
        return{success: "Konfirmasi email telah terkirim!"}
    }
    try {
        await signIn("credentials", { 
            email,
            password,
            redirectTo : DEFAULT_LOGIN_REDIRECT 
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case"CredentialsSignin":
                    return{
                        error:"Password atau email salah!!!"
                    }
                default:
                    return{
                        error:"Terjadi kesalahan!!!"
                    }
            }
        }
        throw error;
    }
};