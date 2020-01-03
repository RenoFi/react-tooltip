const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.jsx?$/,
    include: [
      path.resolve(__dirname, '../stories'),
    ],
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
      },
    ],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
