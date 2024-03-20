"use client"

import { UserRole } from "@prisma/client"
import { NextPage } from "next";

interface RoleGateProps{
    children: React.ReactNode,
    allowedRole: UserRole,
    statusCode: number
}

export const Error:NextPage<RoleGateProps> = ({statusCode}:) => {
    return(
        <p>
            <h1>Error: {statusCode}</h1>
        </p>
    )
}

Error.getInitialProps = ({ res }) => {
    const statusCode = res?.statusCode || 500;

    return { statusCode };
};