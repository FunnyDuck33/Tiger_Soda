/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    output: 'export',
    // assetPrefix: './',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "src/app/styles/variables.scss";`
    },
}

module.exports = nextConfig;
