import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
    const session = await auth();

    return (
        <div>
            {JSON.stringify(session)}
            <form action={as() =>{
                "use server"
                await signOut
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