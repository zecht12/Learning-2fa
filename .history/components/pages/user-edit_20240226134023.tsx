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
import { useSession } from 'next-auth/react';
import { useCurrentUser } from '@/hooks/use-current-user';
import { FormSuccess } from '../login-success';
import { FormError } from '../login-error';
import { UserRole } from '@prisma/client';

const UserEdit = () => {
    const user = useCurrentUser();
    const [success, setSuccess] = useState<string | undefined>();
    const [error, setError] = useState<string | undefined>();
    const [isPending, startTransition] = useTransition();
    const {update} = useSession();

    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues: {
            password: undefined,
            newPassword: undefined,
            name: user?.name || undefined,
            email: user?.email || undefined,
            role: user?.role || undefined,
            isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
        }
    });

    const onSubmit = (values: z.infer<typeof SettingsSchema>) =>{
        startTransition(()=>{
            settings(values).then((data)=>{
                if (data.error) {
                    setError(data.error);
                }
                if (data.success) {
                    setSuccess(data.success);
                    update();
                }
            }).catch(()=> setError("Terjadi kesalahan!"))
        })
    }

    return (
        <div className="h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 py-10 flex items-center justify-center">
            <Card className='w-[600px]'>
                <CardHeader>
                    <p className="text-xl font-semibold text-center">Edit Your Profile</p>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <div className='space-y-4'>
                            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)} >
                                <FormField control={form.control} name="name" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Nama Lengkap
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder='Nama' disabled={isPending}  />
                                        </FormControl>
                                        <FormError/>
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="email" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Email Address
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder='Email' type='email' disabled={isPending}  />
                                        </FormControl>
                                        <FormError/>
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="password" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Password
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder='******' type='password' disabled={isPending}  />
                                        </FormControl>
                                        <FormError/>
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="newPassword" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Password Baru
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder='******' type='password' disabled={isPending}  />
                                        </FormControl>
                                        <FormError/>
                                    </FormItem>
                                )} />
                                {user?.role === "ADMIN" && (
                                    <FormField control={form.control} name="role" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Role
                                            </FormLabel>
                                            <Select disabled={isPending} onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Pilih Role"/>
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
                                            <FormError/>
                                        </FormItem>
                                    )} />
                                )}
                                {user?.isOAuth === false && (
                                    <FormField
                                    control={form.control}
                                    name="isTwoFactorEnabled"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                        <div className="space-y-0.5">
                                            <FormLabel>Two Factor Authentication</FormLabel>
                                            <FormDescription>
                                            Enable two factor authentication for your account
                                            </FormDescription>
                                        </div>
                                        <FormControl>
                                            <Switch disabled={isPending} checked={field.value}
                                            onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        </FormItem>
                                    )}
                                    />
                                )}
                                <FormSuccess message={success}/>
                                <FormError message={error}/>
                                <div className="flex items-center justify-center">
                                    <Button disabled={isPending} type="submit">
                                        Save
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default UserEdit