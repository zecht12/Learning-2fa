import RoleGate from "@/components/shared/role-gate";
import { useCurrentRole } from "@/hooks/use-current-role"
import { UserRole } from "@prisma/client";

const AdminPage = async () => {
    const role = useCurrentRole;
    return (
        <RoleGate allowedRole={UserRole.ADMIN} children={undefined} statusCode={0} />
    )
}

export default AdminPage