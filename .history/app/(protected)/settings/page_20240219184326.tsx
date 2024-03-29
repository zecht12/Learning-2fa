"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
    const user = useCurrentUser();
    const onClick = () => {
        logout();
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900">
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