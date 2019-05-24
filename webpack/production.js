const webpack = require('webpack');
const argv = require('minimist');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const ENV = argv(process.argv.slice(2)).env;
const customEnv = argv(process.argv.slice(3)); // ref https://github.com/webpack/webpack/issues/2254
const analyze = customEnv.env && customEnv.env.analyze;

const env = (() => {
  switch (ENV) {
    default:
      return require('../env/production.js');
  }
})();

const envVars = ((env) => {
  const keys = Object.keys(env);
  keys.forEach((k) => (env[k] = JSON.stringify(process.env[k] || env[k])));
  return env;
})(env);

const bundleAnalyzer = analyze ? [new BundleAnalyzerPlugin()] : [];

// Custom plugin to cleanup the sdk hash from filename
function CustomSDKCleanup(options) {}

CustomSDKCleanup.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('optimize-chunks', (chunks) => {
      chunks.forEach((chunk) => {
        if (
          chunk.name === 'background' ||
          chunk.name === 'inject' ||
          chunk.name === 'worker'
        ) {
          chunk.filenameTemplate = '[name].js';
        }
      });
    });
  });
};

module.exports = {
  mode: 'production',
  optimization: {
    minimize: false,
  },
  output: {
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        ...envVars,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new CustomSDKCleanup({}),
    ...bundleAnalyzer,
  ],
};
