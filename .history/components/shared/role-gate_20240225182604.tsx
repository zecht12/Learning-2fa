"use client"

import { UserRole } from "@prisma/client"

interface RoleGateProps{
    children: React.ReactNode,
    allowedRole: UserRole,
    statusCode: number
}

const RoleGate = ({statusCode, children, allowedRole}: RoleGateProps) => {
    return(
        <div>
            { statusCode === 404 &&(
                d
            )}
        </div>
    )
}

export default RoleGate