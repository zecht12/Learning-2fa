import RoleGate from "@/components/shared/role-gate";
import { useCurrentRole } from "@/hooks/use-current-role"
import { UserRole } from "@prisma/client";

const AdminPage = async () => {
    const role = useCurrentRole;
    return (
        <>
            <RoleGate allowedRole={UserRole.ADMIN}>
                <h1>Admin Page</h1>
            </RoleGate>
        </>
    )
}

export default AdminPage