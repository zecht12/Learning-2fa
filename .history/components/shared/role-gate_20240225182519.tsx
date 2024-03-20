"use client"

import { UserRole } from "@prisma/client"

interface RoleGateProps{
    children: React.ReactNode,
    allowedRole: UserRole,
}

const RoleGate = ({statusCode}) => {
    return(
        <div>
            { statusCode === 404}
        </div>
    )
}

export default RoleGate