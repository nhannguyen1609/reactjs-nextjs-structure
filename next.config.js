
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const path = require('path')

// const isProd = process.env.NODE_ENV === "production";
// // fix: prevents error when .less files are required by node
// if (typeof require !== "undefined") {
//   require.extensions[".less"] = (file) => {};
// }

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles/sass')],
//   },
// }

const nextConfig = {
  distDir: 'build',
};

module.exports = withPlugins([
  withCSS({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    ...withLess(
      withSass({
        lessLoaderOptions: {
          javascriptEnabled: true,
        },
      })
    ),
  }),
  withImages

], nextConfig);