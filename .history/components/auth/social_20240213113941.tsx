"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
    return (
        <div className="w-full flex items-center gap-x-2">
            <Button variant="outline" size="lg" onClick={()}>
                <FcGoogle/>
            </Button>
        </div>
    )
}