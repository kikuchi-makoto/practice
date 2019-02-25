const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const AutoPrefixer = require('autoprefixer');

module.exports = [
  {
    entry: {
      app: [
        './src/js/app.js',
        './src/sass/style.scss',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: '/',
    },
    devServer: {
      contentBase: './dist',
      watchContentBase: true,
      port: 3000,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env'],
          },
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  AutoPrefixer(
                    {
                      browsers: ['last 2 versions', 'Android >= 4'],
                    },
                  ),
                ],
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.vue'],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/style.css',
        chunkFilename: 'css/[id].css',
      }),
    ],
  },
];
