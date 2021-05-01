module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: 'raw-loader',
        },
      ],
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
};
