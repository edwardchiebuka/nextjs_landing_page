/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "",
    }
}

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');



module.exports = withPlugins([optimizedImages], { target: 'serverless' }, nextConfig);
