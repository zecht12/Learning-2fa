"use client";

import { Button } from "@/components/ui/button";

const SettingsPage = () => {
    const session = {};
    

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