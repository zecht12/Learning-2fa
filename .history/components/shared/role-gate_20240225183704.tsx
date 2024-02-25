"use client"

import { useCurrentRole } from "@/hooks/use-current-role"
import { UserRole } from "@prisma/client"
import { notFound } from "next/navigation"

interface RoleGateProps{
    children: React.ReactNode,
    allowedRole: UserRole,
    statusCode: number
}

const RoleGate = ({statusCode, allowedRole}: RoleGateProps) => {
    const role = useCurrentRole();
    if (role !== allowedRole) {
        return(
            <div>
                { statusCode === 404 &&(notFound()) }
            </div>
        )
    }
}

export default RoleGate