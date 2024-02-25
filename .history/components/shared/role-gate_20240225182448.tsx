"use client"

import { UserRole } from "@prisma/client"

interface RoleGateProps{
    children: React.ReactNode,
    allowedRole: UserRole,
}

const RoleGate = ({statusCode}) => {

}

export default Role