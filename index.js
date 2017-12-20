const webpack = require('webpack');

const AutoDllPlugin = require('autodll-webpack-plugin');

function createRewireDll({ entry, path, filename }) {
  const autodllConfig = { inject: true, entry: entry || {} };
  if (path) autodllConfig.path = path;
  if (filename) autodllConfig.filename = filename;
  return function rewireDll(config, env) {
    autodllConfig.plugins = [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          unused: true,
          dead_code: true,
          warnings: false,
          drop_console: true,
          comparisons: false
        },
        output: {
          comments: false,
          // Turned on because emoji and regex is not minified properly using default
          // https://github.com/facebookincubator/create-react-app/issues/2488
          ascii_only: true
        }
      })
    ];
    // https://github.com/webpack/webpack/issues/5478
    config.plugins = (config.plugins || []).concat(
      new AutoDllPlugin(autodllConfig)
    );
    return config;
  };
}

module.exports = createRewireDll;
