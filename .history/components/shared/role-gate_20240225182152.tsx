"use client"

import { UserRole } from "@prisma/client"
import { NextPage } from "next";

interface Error{
    children: React.ReactNode,
    allowedRole: UserRole,
    statusCode: number
}

const Error:NextPage<RoleGateProps> = ({statusCode}) => {
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

export default RoleGate