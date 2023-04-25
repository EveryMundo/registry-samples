// https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration

module.exports = {
  babel: {},
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    },
  },
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    devServerConfig.headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    };
    return devServerConfig;
  },
};
