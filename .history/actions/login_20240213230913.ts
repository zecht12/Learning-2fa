"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const login = (values : z.) => {
    console.log(values);
};