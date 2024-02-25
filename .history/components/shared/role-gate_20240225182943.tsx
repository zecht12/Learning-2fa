"use client"

import { UserRole } from "@prisma/client"
import { notFound } from "next/navigation"

interface RoleGateProps{
    children: React.ReactNode,
    allowedRole: UserRole,
    statusCode: number
}

const RoleGate = ({statusCode, children, allowedRole}: RoleGateProps) => {
    return(
        <div>
            { statusCode === 404 &&(
                notFound
            )}
        </div>
    )
}

export default RoleGate