

const AdminPage = async () => {
    return (
        <div className="h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 pt-28">
            <RoleGate allowedRole={UserRole.ADMIN}>
                <h1 className="text-white">Admin</h1>
            </RoleGate>
        </div>
    )
}

export default AdminPage