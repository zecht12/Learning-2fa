import authConfig from "./auth.config";


export default auth((req) => {
    const isLoggedIn = !!req.auth;
    console.log("ROUTE:",req.nextUrl.pathname)
    console.log("LOGGED IN:",isLoggedIn);
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}