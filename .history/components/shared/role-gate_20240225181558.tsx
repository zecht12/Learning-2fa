"use client"

import { UserRole } from "@prisma/client"

interface RoleGateProps{
    children: React.ReactNode,
    allowedRole: UserRole,
    statusCode: string
}

export const RoleGate = ({statusCode}: RoleGateProps) => {
    return(
        <p>
            {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
        </p>

    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}