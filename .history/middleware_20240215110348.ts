import { auth } from "./auth"

export default auth((req) => {
    console.log(req.pa)
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/auth/login"],
}