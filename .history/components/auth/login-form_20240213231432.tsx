"use client";

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from "../ui/form";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../login-error";
import { FormSuccess } from "../login-success";
import { login } from "@/actions/login";
import { useTransition } from "react";

export const LoginForm = () => {

    const [error,]
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });
    const onSubmit = (values: z.infer<typeof LoginSchema>) =>{
        startTransition(()=>{
            login(values);
        })
    };

    return (
        <CardWrapper headerLabel="Welcome back!" backButtonLabel="Don't have an account?" backButtonHref="/auth/register" showSocial>
            <Form {...form}>
                <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField disabled={isPending} control={form.control} name="email" render={({ field })=>(
                        <FormItem>
                            <FormLabel>
                                Email
                            </FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Email address" type="email" />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}/>
                    <FormField disabled={isPending}  control={form.control} name="password" render={({ field })=>(
                        <FormItem>
                            <FormLabel>
                                Password
                            </FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="******" type="password" />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}/>
                    <FormError message="" />
                    <FormSuccess message="" />
                    <Button disabled={isPending}  type="submit" className="w-full">
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}
