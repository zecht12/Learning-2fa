"use client"

import { UserRole } from "@prisma/client"

interface RoleGateProps{
    children: React.ReactNode,
    allowedRole: UserRole,
}

const RoleGate = ({statusCode}) => {
    return(
        <div></div>
    )
}

export default RoleGate