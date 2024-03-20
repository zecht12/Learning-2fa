import * as z from "zod";
import { UserRole } from "@prisma/client";

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
    image: z.object({
            type: z.string().refine(
                (type) =>
                    type === "image/png" ||
                    type === "image/jpeg" ||
                    type === "image/jpg",
                {
                    message: "Invalid image type. Supported types: png, jpeg, jpg",
                }
            ),
            size: z.number().refine((size) => size <= 5000000, {
                message: "File size should be less than or equal to 5 MB.",
            }),
        })
        .refine((data) => data.size > 0, {
            message: "File is required.",
        }),
})
    .refine((data) => {
        if (data.password && !data.newPassword) {
            return false;
        }

        return true;
    }, {
        message: "New password is required!",
        path: ["newPassword"],
    })
    .refine((data) => {
        if (data.newPassword && !data.password) {
            return false;
        }

        return true;
    }, {
        message: "Password is required!",
        path: ["password"],
    });

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