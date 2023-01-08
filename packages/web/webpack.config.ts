import path from "path";
import webpack from "webpack";

export default (_, { mode }, dev = mode === "development") => ({
  target: "web",
  devtool: dev ? "eval-cheap-source-map" : "source-map",
  entry: {
    main: require.resolve("./src"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
          plugins: ["babel-plugin-styled-components"],
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {},
    // https://webpack.js.org/configuration/resolve/#resolvefallback
    fallback: {},
  },
  output: {
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({}),
    // https://webpack.js.org/plugins/html-webpack-plugin/
    new (require("html-webpack-plugin"))({
      favicon: require.resolve("./src/assets/favicon.ico"),
    }),
  ].filter(Boolean),
});
