"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ExtendedUser } from "@/next-auth";

interface UserInfoProps {
    user?: ExtendedUser;
    label: string;
};

const SettingsPage = ({
    user,
label, }: UserInfoProps) => {

    return (
        <div className="h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 pt-28">
            <Card>
                <CardHeader>

                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default SettingsPage