import React, { useTransition } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { settings } from '@/actions/settings';
import { Button } from '../ui/button';
import { string } from 'zod';

const UserEdit = () => {
    const [isPending, startTransition] = useTransition();

    const onClick = () =>{
        startTransition(()=>{
            settings({
                name: "user",
                email: "new.email@example.com"
                role:"ADMIN" 
            });
        })
    }

    return (
        <div className="h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 py-28 flex items-center justify-center">
            <Card className='w-[600px]'>
                <CardHeader>
                    <p>Edit Your Profile</p>
                </CardHeader>
                <CardContent>
                    <Button disabled onClick={onClick}>

                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default UserEdit