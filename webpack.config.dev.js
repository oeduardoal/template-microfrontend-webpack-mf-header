const { urls } = require("@oeduardoal/microfrontend-config");
const webpack = require("./webpack.config");

const env = process.env.ENV || "dev";

const { header } = urls[env];

/** @type { import('webpack').Configuration } */
module.exports = {
  ...webpack,
  output: {
    publicPath: header.url,
  },
  devServer: {
    port: header.port,
  },
};
