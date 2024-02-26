import React, { useState, useTransition } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { settings } from '@/actions/settings';
import { Button } from '../ui/button';
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { Form, FormField, FormControl, FormItem, FormLabel, FormDescription, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { SettingsSchema } from '@/schemas';
import { useSession } from 'next-auth/react';
import { useCurrentUser } from '@/hooks/use-current-user';

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
        <div className="h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 py-28 flex items-center justify-center">
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
                                    </FormItem>
                                )} />
                                <Form
                                <div className="flex items-center justify-center">
                                    <Button type="submit">
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