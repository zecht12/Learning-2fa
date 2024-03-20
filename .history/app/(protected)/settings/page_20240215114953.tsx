import { auth } from "@/auth"

const SettingsPage = async () => {
    const session = await auth();

    return (
        <div>
            {JSON.stringify.}
        </div>
    )
}

export default SettingsPage