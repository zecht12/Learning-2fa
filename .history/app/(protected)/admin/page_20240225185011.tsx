import RoleGate from "@/components/shared/role-gate";
import { useCurrentRole } from "@/hooks/use-current-role"
import { UserRole } from "@prisma/client";

const AdminPage = async () => {
    const role = useCurrentRole;
    return (
        <div className="">
            <RoleGate allowedRole={UserRole.ADMIN}>
                <div className="h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 pt-28">
                </div>
            </RoleGate>
        </div>
    )
}

export default AdminPage