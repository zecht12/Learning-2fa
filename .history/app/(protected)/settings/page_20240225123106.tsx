"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import UserInfo from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

import Image from "next/image";
import Link from "next/link";

const SettingsPage = () => {
    const user = useCurrentUser();
    return (
        <UserInfo
    )
}

export default SettingsPage