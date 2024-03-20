import { auth } from "./auth"

export default auth((req) => {
    const isLoggedIn = !!re
    console.log("ROUTE:",req.nextUrl.pathname)
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}