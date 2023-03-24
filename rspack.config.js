const CopyPlugin = require('copy-webpack-plugin');
/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  entry: {
    main: './src/index.jsx', // Configure the project entry file
  },
  builtins: {
    html: [
      {
        template: './index.html', // Align CRA to generate index.html
      },
    ],
  },
  plugins: [
    new CopyPlugin([
      {
        from: 'public',
        to: '.',
      },
    ]),
  ], // Copy the files from the public directory to the dist directory, aligning the behavior of the CRA
};