"use client";

import { Button } from "@/components/ui/button";
import { useSession, sign } from "next-auth/react";

const SettingsPage = () => {
    const session = useSession();
    

    return (
        <div>
            {JSON.stringify(session)}
            <form>
                <Button asChild variant="destructive" size="sm">
                    <button type="submit">
                        Sign Out
                    </button>
                </Button>
            </form>
        </div>
    )
}

export default SettingsPage