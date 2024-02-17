import { auth } from "@/auth"

const SettingsPage = async () => {
    const session = await auth();

    return (
        <div>
            {JSON.stringify(session)}
            <form action={}w/>/"></form>
        </div>
    )
}

export default SettingsPage