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
}).refine(data => {
    if (!data.image) return true; // If no image is provided, it's valid
    // Check if the image is a URL or a base64 string
    return typeof data.image === "string" && (data.image.startsWith("http://") || data.image.startsWith("https://") || data.image.startsWith("data:image/"));
}, {
    message: "Invalid image format",
    path: ["image"]
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