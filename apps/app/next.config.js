/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/house",
  output: "export",
  transpilePackages: ["@acme/ui"],
};

module.exports = nextConfig;
