"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const login = (values : z.infer<typeof LoginSchema>) => {
    const validatedField = LoginSchema.safeParse(values);

    if (!validatedField.success) {
        return(
            
        )
    };
};