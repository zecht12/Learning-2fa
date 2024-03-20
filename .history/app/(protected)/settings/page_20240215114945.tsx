import { auth } from "@/auth"

const SettingsPage = async () => {
    const session = await auth();

    return (
        <div>
            {json}
        </div>
    )
}

export default SettingsPage