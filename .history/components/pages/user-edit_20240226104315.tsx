import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'

const UserEdit = () => {
    return (
        <div className="h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 py-28 flex items-center justify-center">
            <Card className='w-[600px]'>
                <CardHeader>
                    <p>Edit Your Profile</p>
                </CardHeader>
                <CardContent>
                    <form action="/user" method="POST">
                        <label htmlFor="username">Username:</label><br />
                        <input type="text" id="username" name="username"/><br />
                        <label htmlFor="email">Email address:</label><br />
                        <input type="email" id="email" name="email"/><br />
                        <button type="submit">Submit
                </CardContent>
            </Card>
        </div>
    )
}

export default UserEdit