import { Header } from "./header"
import { BackButton } from "./back-button"
import { Card, CardFooter, CardHeader } from "../ui/card"

const ErrorCard = () => {
    return (
        <Card className="w-[">
            <CardHeader>
                <Header label="Terjadi KEsalahan!!!"/>
            </CardHeader>
        </Card>
    )
}

export default ErrorCard