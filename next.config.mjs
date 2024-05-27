/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH; 

const spaUrl = process.env.NODE_ENV == "production" ? "https://www.chanced.com" : "https://gambleh.com";


const nextConfig = {
    basePath:`/${basePath}`,
    async rewrites() {
        return {
            fallback:[
                {
                    source: '/:path*',
                    destination: `${spaUrl}/:path*`,
                    basePath: false,
                }

            ]
        };
    },
    transpilePackages: ['next-mdx-remote'],
};



export default nextConfig;
