import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
    const session = await auth();

    return (
        <div>
            {JSON.stringify(session)}
            <form action={async () =>{
                "use server"
                signOut
            }}>
                <Button asChild variant="destructive" size="sm">
                    <button type="submit">
                        Sign Out
                    </button>
            </form>
        </div>
    )
}

export default SettingsPage