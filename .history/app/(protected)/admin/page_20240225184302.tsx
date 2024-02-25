import RoleGate from "@/components/shared/role-gate";
import { useCurrentRole } from "@/hooks/use-current-role"
import { UserRole } from "@prisma/client";

const AdminPage = async () => {
    const role = useCurrentRole;
    return (
        <div>
                      <FormSuccess
            message="You are allowed to see this content!"/>
        </div>
    )
}

export default AdminPage