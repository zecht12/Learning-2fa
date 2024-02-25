import { useCurrentRole } from "@/hooks/use-current-role"

const AdminPage = async () => {
    const role = useCurrentRole);
    return (
        <div>page</div>
    )
}

export default AdminPage