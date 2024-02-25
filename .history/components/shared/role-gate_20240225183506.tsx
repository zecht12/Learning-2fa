"use client"

import { useCurrentRole } from "@/hooks/use-current-role"
import { UserRole } from "@prisma/client"
import { notFound } from "next/navigation"

interface RoleGateProps{
    children: React.ReactNode,
    allowedRole: UserRole,
    statusCode: number
}

const RoleGate = ({statusCode, children, allowedRole}: RoleGateProps) => {
    const role = useCurrentRole();
    if (role !== allowedRole) {
        
    }
}

export default RoleGate