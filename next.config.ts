import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
    reactStrictMode: true,
    env: {
        DB_URL: process.env.TURSO_DATABASE_URL,
        AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
        BASE_URL: process.env.BASE_URL
    }
}

export default nextConfig;
