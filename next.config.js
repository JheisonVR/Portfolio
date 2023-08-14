/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'camo.githubusercontent.com'
            },
            {
                protocol:'https',
                hostname:'images3.alphacoders.com'
            },
            {
                protocol:'https',
                hostname:'images6.alphacoders.com'
            },
            {
                protocol:'https',
                hostname:'images.alphacoders.com'
            }


        ]
    }
}

module.exports = nextConfig
