"use client"

import { UserRole } from "@prisma/client"

interface RoleGateProps{
    children: React.ReactNode,
    allowedRole: UserRole,
    statusCode: number
}

export const RoleGate = ({statusCode}: RoleGateProps) => {
    return(
        <p>
            {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
        </p>
    )
}

Error.getInitialProps = ({ res }) => {
    const statusCode = res?.statusCode || 500;

    return { statusCode };
  };