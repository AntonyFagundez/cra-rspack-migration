const CopyPlugin = require('copy-webpack-plugin');


/**
* @type {import('@rspack/cli').Configuration}
*/
const config = {
  entry: {
    main: './src/index.tsx', // Configure the project entry file
  },
  builtins: {
    html: [
      {
        template: './public/index.html', // Align CRA to generate index.html
        files: {
          favicon: "./favicon.ico",
          manifest: "./manifest.json",
        }
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

module.exports = config;