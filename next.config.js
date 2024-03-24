/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: `scontent-dev.dsc.com.vn`,
            port: '',
            pathname: '/images/**',
          },
          {
            protocol: 'https',
            hostname: `scontent-uat.dsc.com.vn`,
            port: '',
            pathname: '/images/**',
          },
          {
            protocol: 'https',
            hostname: `scontent.dsc.com.vn`,
            port: '',
            pathname: '/images/**',
          },
        ],
    },
}

module.exports = nextConfig
