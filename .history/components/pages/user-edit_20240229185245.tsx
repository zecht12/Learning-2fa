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
        <div className="h-auto w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 py-10 flex items-center justify-center">
            <Card className="w-[600px]">
                <CardHeader>
                    <p className="text-2xl font-semibold text-center">
                    Edit Your Profile
                    </p>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form  className="space-y-6"  onSubmit={form.handleSubmit(onSubmit)} >
                            <div className="space-y-4">
                                <CldUploadButton uploadPreset="aoks0xlu" className={`h-[200px] w-full border-2 mt-4 border-dotted flex items-center justify-center bg-slate-100 rounded-md relative ${ imageUrl && "pointer-events-none"}`} onUpload={handleImageUpload}>
                                    <FaRegImage />
                                </CldUploadButton>
                                {imageUrl && (
                                    <Image src={imageUrl} width={200} height={200} className="w-full h-auto mt-4" alt="Uploaded" />
                                )}
                                <FormField control={form.control} name="name" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="John Doe" disabled={isPending} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                {user?.isOAuth === false && (
                                    <>
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="john.doe@example.com"
                                                type="email"
                                                disabled={isPending}
                                            />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="******"
                                                type="password"
                                                disabled={isPending}
                                            />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="newPassword"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>New Password</FormLabel>
                                            <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="******"
                                                type="password"
                                                disabled={isPending}
                                            />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    </>
                                )}
                                {user?.role === "ADMIN" &&(
                                    <FormField control={form.control} name="role" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Role</FormLabel>
                                            <Select disabled={isPending} onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Pilih Role" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value={UserRole.ADMIN}>
                                                        Admin
                                                    </SelectItem>
                                                    <SelectItem value={UserRole.USER}>
                                                        User
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                ) }
                                {user?.isOAuth === false && (
                                    <FormField
                                    control={form.control}
                                    name="isTwoFactorEnabled"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                        <div className="space-y-0.5">
                                            <FormLabel>Two Factor Authentication</FormLabel>
                                            <FormDescription>
                                            Gunakan Two Factor Authentication
                                            </FormDescription>
                                        </div>
                                        <FormControl>
                                            <Switch
                                            disabled={isPending}
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        </FormItem>
                                    )}
                                    />
                                )}
                            </div>
                            <FormError message={error} />
                            <FormSuccess message={success} />
                            <Button disabled={isPending} type="submit">
                                Save
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default UserEdit