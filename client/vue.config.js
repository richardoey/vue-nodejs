module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:8088",
        changeOrigin: true,
        secure: false,
        logLevel: "debug",
      },
      "^/api": {
        target: "http://localhost:8088",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": "/api",
        },
        logLevel: "debug",
      }
    },
  },
};
