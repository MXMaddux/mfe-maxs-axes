const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common");
const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require("../package.json");
const { dependencies } = require("webpack");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        cart: "cart@http://localhost:8081/remoteEntry.js",
        navbar: "navbar@http://localhost:8082/remoteEntry.js",
      },
      filename: "remoteEntry.js",
      exposes: {
        "./CartApp": "./src/bootstrap",
      },
      shared: [
        packageJson.dependencies,

        {
          react: { singleton: true, requiredVersion: "18.2.0" }, // Specify your React version
          "react-dom": { singleton: true, requiredVersion: "18.2.0" },
          "@mui/material": {
            singleton: true,
            eager: false,
            requiredVersion: "^5.15.10",
          }, // Adjust according to your Material UI version
          // Any other shared dependencies...
        },
      ],
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
