import { Header } from "./header"
import { BackButton } from "./back-button"
import { Card, CardFooter, CardHeader } from "../ui/card"

const ErrorCard = () => {
    return (
        <Card className="w-[400px] shadow-md ">
            <CardHeader>
                <Header label="Terjadi KEsalahan!!!"/>
            </CardHeader>
            <CardFooter>
                <BackButton/>
            </CardFooter>
        </Card>
    )
}

export default ErrorCard