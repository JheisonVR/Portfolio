/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'camo.githubusercontent.com'
            }
        ]
    }
}

module.exports = nextConfig
