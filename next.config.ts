import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    env: {
        DB_URL: process.env.TURSO_DATABASE_URL,
        AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
        BASE_URL: process.env.BASE_URL
    },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer(nextConfig)

export default nextConfig;
