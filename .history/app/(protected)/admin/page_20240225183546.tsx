import RoleGate from "@/components/shared/role-gate";
import { useCurrentRole } from "@/hooks/use-current-role"

const AdminPage = async () => {
    const role = useCurrentRole;
    return (
        <RoleGate allowedRole={} />
    )
}

export default AdminPage