"use client"

import React from "react";
import { UserRole } from "@prisma/client"
import { NextPage } from "next";

interface RoleGateProps{
    children: React.ReactNode,
    allowedRole: UserRole,
    statusCode: number
}

const Role: NextPage<RoleGateProps> = ({statusCode, children, allowedRole}) => {
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

export default Error