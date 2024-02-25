"use client"

import { useCurrentRole } from "@/hooks/use-current-role"
import { UserRole } from "@prisma/client"
import { notFound } from "next/navigation"

interface RoleGateProps{
    allowedRole: UserRole,
}

const RoleGate = ({allowedRole}: RoleGateProps) => {
    const role = useCurrentRole();
    if (role !== allowedRole) {
        return(
            <div>
                (notFound())
            </div>
        )
    }
}

export RoleGate