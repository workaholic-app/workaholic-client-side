const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const configs = {
  development: require(path.join(__dirname, 'webpack/development.js')),
  production: require(path.join(__dirname, 'webpack/production.js')),
};

const NODE_ENV = process.env.NODE_ENV;

const commonConfig = {
  entry: {
    index: [
      path.join(__dirname, 'src/main.js'),
      ...(NODE_ENV === 'development' ? ['webpack-hot-middleware/client'] : []),
    ],
    // background: [
    //   path.join(__dirname, 'src/background.js'),
    //   ...(NODE_ENV === 'development' ? ['webpack-hot-middleware/client'] : []),
    // ],
    // inject: [
    //   path.join(__dirname, 'src/inject.jsx'),
    //   ...(NODE_ENV === 'development' ? ['webpack-hot-middleware/client'] : []),
    // ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            emitWarning: NODE_ENV === 'development',
            emitError: NODE_ENV === 'production',
            failOnWarning: NODE_ENV === 'production',
            failOnError: NODE_ENV === 'production',
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
			},
			{
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}
    ],
  },
  resolve: {
    extensions: ['.vue', '.js'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
		],
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new StyleLintPlugin({
    //   configFile: path.join(__dirname, '.stylelintrc'),
    //   files: '**/*.?(sa|sc|c)ss',
    //   context: path.join(__dirname, 'src'),
    //   emitErrors: NODE_ENV === 'production',
    // }),
    new HtmlWebpackPlugin({
      title: 'workaholic',
      template: path.join(__dirname, 'index.html'),
      chunks: ['index'],
      inject: 'body',
			alwaysWriteToDisk: true,
			baseUrl: 'https://www.google.com'
    }),
		new HtmlWebpackHarddiskPlugin(),
		new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'public'),
        to: path.join(__dirname, 'dist'),
      },
    ]),
    new ImageminPlugin({
      disable: NODE_ENV === 'development',
      test: /\.(jpe?g|png|gif|svg)$/i,
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new FaviconsWebpackPlugin({
      logo: path.join(__dirname, 'public/favicon.png'),
      prefix: 'favicon/',
      inject: true,
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: true,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),
  ],
};

const environmentConfig = (() => {
  switch (NODE_ENV) {
    case 'production':
      return configs.production;
    case 'development':
    default:
      return configs.development;
  }
})();

module.exports = merge(commonConfig, environmentConfig);
