"use client";

import UserInfo from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
    const user = useCurrentUser();
    return (
        <UserInfo user={user}/>
    )
}

export default SettingsPage