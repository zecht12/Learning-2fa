import RoleGate from "@/components/shared/role-gate";
import { useCurrentRole } from "@/hooks/use-current-role"
import { UserRole } from "@prisma/client";

const AdminPage = async () => {
    const role = useCurrentRole;
    return (
        <div>
            <RoleGate allowedRole={UserRole.ADMIN}>
                
            </RoleGate>
        </div>
    )
}

export default AdminPage