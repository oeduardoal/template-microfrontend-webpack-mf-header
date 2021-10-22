const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const { webpack, merge } = require("@oeduardoal/microfrontend-config");

const deps = require("./package.json").dependencies;

/** @type { import('webpack').Configuration } */
module.exports = merge.merge(webpack, {
  plugins: [
    new ModuleFederationPlugin({
      name: "header",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/header",
      },
      shared: deps,
    }),
  ],
});
