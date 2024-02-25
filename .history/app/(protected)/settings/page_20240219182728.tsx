"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const SettingsPage = () => {
    const session = useSession();
    const onClick = () => {
        logout();
    }

    return (
        <div>
            {JSON.stringify(session)}
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