"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useCurrentUser } from "@/hooks/use-current-user";


import { currentUser } from "@/lib/auth";
import { ExtendedUser } from "@/next-auth";
import Image from "next/image";
import Link from "next/link";

const SettingsPage = () => {
    const user = useCurrentUser();
    return (
    )
}

export default SettingsPage