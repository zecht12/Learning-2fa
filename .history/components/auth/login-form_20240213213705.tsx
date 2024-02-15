import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from "../ui/form";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginForm = () => {

    const form = useForm<z.infer<typeof LoginSchema>({
        resolver: zodResolver(LoginSchema) 
    });

    return (
        <CardWrapper headerLabel="Welcome back!" backButtonLabel="Don't have an account?" backButtonHref="/auth/register" showSocial>
            LoginForm
        </CardWrapper>
    )
}
