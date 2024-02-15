import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps{
    message?: string,
};

export const FormError =({message}: FormErrorProps)=>{
    if (!message) return null
    return(
        <div className="bg-destructive">

        </div>
    )
};