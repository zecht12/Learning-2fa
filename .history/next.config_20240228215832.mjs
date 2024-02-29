/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ 
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com',
            newFunction()
        ]
    }
};

export default nextConfig;
function newFunction() {
    return "C:\fakepath'";
}

