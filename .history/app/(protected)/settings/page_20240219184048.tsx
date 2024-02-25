"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useSession } from "next-auth/react";

const SettingsPage = () => {
    const user = useCurrent();
    const onClick = () => {
        logout();
    }

    return (
        <div>
            {JSON.stringify(user)}
            <form>
                <Button asChild variant="destructive" size="sm">
                    <button type="submit" onClick={onClick}>
                        Sign Out
                    </button>
                </Button>
            </form>
        </div>
    )
}

export default SettingsPage