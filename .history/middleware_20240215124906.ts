export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
    exports: {
        'default': ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    },
}