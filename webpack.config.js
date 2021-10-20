const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { webpack } = require("@oeduardoal/microfrontend-config");
const deps = require("./package.json").dependencies;

/** @type { import('webpack').Configuration } */
module.exports = {
  ...webpack,
  output: {
    publicPath: "auto",
  },
  plugins: [
    ...webpack.plugins,
    new ModuleFederationPlugin({
      name: "header",
      filename: "remoteEntry.js",
      exposes: {
        "./main": "./src/app",
      },
      shared: deps,
    }),
  ],
};
