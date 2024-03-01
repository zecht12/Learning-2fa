"use client";

import React, { useState, useTransition } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { settings } from '@/actions/settings';
import { Button } from '../ui/button';
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { Switch } from "@/components/ui/switch";
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select";
import { Form, FormField, FormControl, FormItem, FormLabel, FormDescription, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { SettingsSchema } from '@/schemas';
import { useCurrentUser } from '@/hooks/use-current-user';
import { FormSuccess } from '../login-success';
import { FormError } from '../login-error';
import { UserRole } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { CldUploadButton, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import Image from 'next/image';
import { FaRegImage } from 'react-icons/fa';

const UserEdit = () => {
    const user = useCurrentUser();
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const [imageUrl, setImageUrl] = useState<string | undefined>("");
    const { update } = useSession();
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues: {
            password: undefined,
            newPassword: undefined,
            name: user?.name || undefined,
            email: user?.email || undefined,
            role: user?.role || undefined,
            isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
            image: user?.image || undefined,
        }
    });

    const handleImageUpload = (result: CloudinaryUploadWidgetResults) => {
        console.log("result: ", result);
        const info = result.info as object;

        if ("secure_url" in info && "public_id" in info) {
            const url = info.secure_url as string;
            setImageUrl(url);
            console.log("url: ", url);
        }
    };

    const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
        if (imageUrl) {
            values.image = imageUrl;
        }


        startTransition(() => {
            settings(values)
            .then((data) => {
                if (data.error) {
                setError(data.error);
                }
                if (data.success) {
                    update();
                    setSuccess(data.success);
                }
            })
            .catch(() => setError("Something went wrong!"));
        });
    }

    return (
        <>
            {user.role === "ADMIN"}
        </>
    )
}

export default UserEdit