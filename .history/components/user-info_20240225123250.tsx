import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ExtendedUser } from '@/next-auth';

interface UserInfoProps {
    user?: ExtendedUser;
    label: string;
};

const UserInfo = ({user}:UserInfoProps) => {
    return (
        <div className="h-auto w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 py-28 px-14">
        <Card>
            <CardHeader>
                <p className="text-2xl font-semibold text-center">Settings</p>
            </CardHeader>
            <CardContent className="space-y-4">
            <div className="flex items-center justify-center rounded-lg p-3">
                    <Image width="300" height="300"  className="rounded-full" src={user?.image || '/images/placeholder.jpg'} alt={user?.name??""} />
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg p-3">
                    <p className="text-sm font-medium">
                        Name
                    </p>
                    <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                        {user?.name}
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg p-3">
                    <p className="text-sm font-medium">
                        Email
                    </p>
                    <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                        {user?.email??""}
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg p-3">
                    <p className="text-sm font-medium">
                        Role
                    </p>
                    <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                        {user?.role}
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <p className="text-sm font-medium">
                        Two Factor Authentication
                    </p>
                    <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
                        {user?.isTwoFactorEnabled ? "ON" : "OFF"}
                    </Badge>
                </div>
                <div className="flex items-center justify-center">
                    <Button asChild variant="default" size="lg">
                        <Link href="/settings/edit">
                            Edit Your Profile
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
    )
}

export default UserInfo