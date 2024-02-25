"use client"

import React from "react";
import { UserRole } from "@prisma/client"
import { NextPage } from "next";

interface ErrorProps{
    children: React.ReactNode,
    allowedRole: UserRole,
    statusCode: number
}

const Error: NextPage<ErrorProps> = ({statusCode}) => {
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