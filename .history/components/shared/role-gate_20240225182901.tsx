"use client"

import { UserRole } from "@prisma/client"
import notF

interface RoleGateProps{
    children: React.ReactNode,
    allowedRole: UserRole,
    statusCode: number
}

const RoleGate = ({statusCode, children, allowedRole}: RoleGateProps) => {
    return(
        <div>
            { statusCode === 404 &&(

            )}
        </div>
    )
}

export default RoleGate