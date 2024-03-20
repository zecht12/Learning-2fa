"use server";

import { db } from '@/lib/db';
import * as z from "zod";
import { FavoriteSchema } from '@/schemas';
import { User } from '@prisma/client';
import { getUserByEmail } from '@/data/user';
import { currentUser } from '@/lib/auth';

export const addFavorite = async (values: z.infer<typeof FavoriteSchema>) => {

    const validatedField = FavoriteSchema.safeParse(values);

    if (!validatedField.success) {
        return{error: "Terjadi kesalahan!"}
    };

    const {email, image} = validatedField.data;
    const exitingUser = await getUserByEmail(email??"");
    if (!exitingUser || !exitingUser.email) {
        return {error: "Email tidak ada!"}
    }

    await db.favorite.create({
        data:{
            email: exitingUser.email, 
            image,
        }
    })
    return { success: "Telah ditambahkan ke Favorite!" };
};