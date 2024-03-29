import React, { useTransition } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { settings } from '@/actions/settings';
import { Button } from '../ui/button';
import * as z from "zod";
import { useForm } from 'react-hook-form';
import form
import { zodResolver } from '@hookform/resolvers/zod';
import { SettingsSchema } from '@/schemas';
import { useSession } from 'next-auth/react';

const UserEdit = () => {
    const [isPending, startTransition] = useTransition();
    const {update} = useSession();

    const onClick = () =>{
        startTransition(()=>{
            settings({
                name: "user New"
            }).then(()=>{
                update();
            })
        })
    }

    return (
        <div className="h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 py-28 flex items-center justify-center">
            <Card className='w-[600px]'>
                <CardHeader>
                    <p className="text-xl font-semibold text-center">Edit Your Profile</p>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-center">
                        <Button disabled={isPending} onClick={onClick}>
                            Save
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default UserEdit