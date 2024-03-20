"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ExtendedUser } from "@/next-auth";

interface UserInfoProps {
    user?: ExtendedUser;
};

const SettingsPage = ({ user }: UserInfoProps) => {

    return (
        <div className="h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 py-28 px-14">
            <Card>
                <CardHeader>
                    <p className="text-2xl font-semibold text-center">Settings</p>
                </CardHeader>
                <CardContent className="space-y-4">
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <p className="text-sm font-medium">
                        Name
                    </p>
                    <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                        {user?.name}
                    </p>
                </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default SettingsPage