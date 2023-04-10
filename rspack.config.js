
const path = require("path");
const envVars = require("./environment.config");
/**
 * 
 * @returns {import('@rspack/cli').Configuration}
 */
module.exports = function(env, argv) {
  
  const isProd = process.env.NODE_ENV === "production";
  
  return {
    entry: {
      main: './src/index.tsx', // Configure the project entry file
    },
    stats: isProd ? "normal" : "errors-only",
    mode: isProd ? "production" : "development",
    devtool: isProd ? false : "source-map",
    devServer: {
      port: process.env.PORT || 3000,
      webSocketServer: "sockjs",
      historyApiFallback: true,
      compress: true,
      client: {
        overlay: true,
        progress: false,
      },
    },
    builtins: {
      html: [
        {
          template: './index.html', // Align CRA to generate index.html
        },
      ],
      copy: {
        patterns: [{
          from: "public",
          to: "."
        }]
      },
      css: {
        modules: {
          localIdentName: isProd
            ? `${process.env.npm_package_name}_[name]_[local]`
            : `${process.env.npm_package_name}_[path][name]__[local]`,
        },
      },
      define: {
        "process.env": envVars
      },
    },
    resolve: { 
      modules: ["node_modules"], 
      alias: {
        "~": path.resolve(__dirname, "src"),
      } 
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ["sass-loader"],
          type: "css",
        },
        {
          test: /\.module\.scss$/,
          use: ["sass-loader"],
          type: "css/module",
        },
        {
          resourceQuery: /raw/,
          type: 'asset/source'
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          reactVendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: "vendor-react",
            chunks: "all",
            priority: -10,
          },
        },
      },
    },
  }
};
