"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const SettingsPage = () => {
    const session = useSession();
    

    return (
        <div>
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