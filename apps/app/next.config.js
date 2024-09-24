/** @type {import('next').NextConfig} */
const { dirname } = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/house" : "",
  output: "export",
  transpilePackages: ["@acme/ui"],
  webpack: (config, options) => {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            context: dirname(require.resolve("@dev/ext/package")),
            from: "dist/*.zip",
            to: "../public/tmp/[name][ext]",
            // noErrorOnMissing: true,
          },
        ],
      }),
    );
    return config;
  },
};

module.exports = nextConfig;
