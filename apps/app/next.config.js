/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/house" : "",
  output: "export",
  transpilePackages: ["@acme/ui"],
};

module.exports = nextConfig;
