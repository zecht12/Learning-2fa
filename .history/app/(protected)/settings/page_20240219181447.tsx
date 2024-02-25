""

import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button";

const SettingsPage = () => {
    const session = {};
    

    return (
        <div>
            {JSON.stringify(session)}
            <form action={async () =>{
                "use server"
                await signOut();
            }}>
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