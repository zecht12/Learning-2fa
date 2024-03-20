"use client"

import { useCurrentRole } from "@/hooks/use-current-role"
import { UserRole } from "@prisma/client"
import { notFound } from "next/navigation"

interface RoleGateProps{
    allowedRole: UserRole,
    children: R
}

const RoleGate = ({allowedRole, children}: RoleGateProps) => {
    const role = useCurrentRole();
    if (role !== allowedRole) {
        return(
            <>
                {notFound()}
            </>
        )
    } if (role === allowedRole) {
        <>
            {children}
        </>
    }
}

export default RoleGate