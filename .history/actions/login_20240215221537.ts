"use server";

import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { AuthError } from 'next-auth';

export const login = async (values : z.infer<typeof LoginSchema>) => {
    const validatedField = LoginSchema.safeParse(values);

    if (!validatedField.success) {
        return{error: "Terjadi kesalahan!"}
    };
    const {email, password} = validatedField.data;
    try {
        await signIn("credentials", { 
            email,
            password,
            redirectTo : DEFAULT_LOGIN_REDIRECT 
        });
    } catch (error) {
        if (error instanceof AuthError) {
            
        }
    }
};