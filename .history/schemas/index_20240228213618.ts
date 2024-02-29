import * as z from "zod";
import { UserRole } from "@prisma/client";

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
    image: z.optional(z.string()),
})
    .refine((data) => {
        if (data.password && !data.newPassword) {
        return false;
        }

        return true;
    }, {
        message: "Password baru dibutuhkan!",
        path: ["newPassword"]
    })
    .refine((data) => {
        if (data.newPassword && !data.password) {
        return false;
        }

        return true;
    }, {
        message: "Password Dibutuhkan!",
        path: ["password"]
    }).refine(data => {
        // If image is not provided, it's valid
        if (!data.image) return true;
        // Validate if image is of accepted types and size
        const file = data.image[0];
        return (
            (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/jpg") &&
            file.size <= 5000000 // 5MB limit
        );
    }, {
        message: "File is required and must be an image (PNG, JPEG, JPG) with a size less than 5MB.",
        path: ["image"]
    })

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Minimal 6 karakter",
    }),
});

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email dibutuhkan",
    }),
});

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email dibutuhkan",
    }),
    password: z.string().min(1, {
        message: "Password dibutuhkan",
    }),
    code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email dibutuhkan",
    }),
    password: z.string().min(6, {
        message: "Minimal 6 karakter",
    }),
    name: z.string().min(1, {
        message: "Name dibutuhkan",
    }),
});