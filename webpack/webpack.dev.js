module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    proxy: [
      {
        context: ["/api"], // Массив путей для проксирования
        target: "https://belparyaj.com",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
        secure: false,
      },
    ],
  },
};
