/**
 * @PengJiyuan
 */
const path = require('path');
const fs = require('fs');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const lessToJs = require('less-var-parse');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
// const manifestJson = require('./manifest.json');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// show webpack bundle analyze
const showMeMore = process.env.npm_config_showmemore;

const entry = {};
fs.readdirSync('./applications')
  .filter(m => fs.statSync(path.join('./applications', m)).isDirectory())
  .forEach((m) => {
    entry[m] = ['babel-polyfill', `./applications/${m}/index.jsx`];
  });

const themer = lessToJs(fs.readFileSync(path.join(__dirname, './theme/index.less'), 'utf8'));

const webpackConfig = {

  mode: 'development',

  context: __dirname,

  entry,

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].min.js',
    publicPath: '/public'
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    }, {
      test: /\.less|css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins() {
              return [autoprefixer];
            }
          }
        }, {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
            sourceMap: true,
            modifyVars: themer
          }
        }
      ]
    }, {
      test: /\.(woff|svg|eot|ttf|otf)\??.*$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            limit: 1000,
            name: '/fonts/[hash:8].icon.[ext]'
          }
        }
      ]
    }]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          name: 'dll',
          minChunks: 1,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 100
        }
      }
    }
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css'
    }),
    // new webpack.DllReferencePlugin({
    //   context: path.join(__dirname),
    //   manifest: manifestJson
    // }),
    new WriteFilePlugin()
  ],

  resolve: {
    extensions: ['.jsx', '.js', 'json'],
    modules: [
      path.resolve(__dirname, '..'),
      'node_modules'
    ],
    alias: {
      react: 'node_modules/react',
      'react-dom': 'node_modules/react-dom'
    }
  },
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8888,
    inline: true,
    historyApiFallback: true,
    stats: {
      assets: true,
      colors: true,
      warnings: true,
      errors: true,
      errorDetails: true,
      entrypoints: true,
      version: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      children: false
    }
  },
  watch: true
};

const pluginHtmls = Object.keys(entry).map(id => new HtmlWebpackPlugin({
  filename: `${id === 'dashboard' ? 'index' : id}.html`,
  inject: true,
  template: path.resolve(__dirname, `html/${id}.html`)
}));

webpackConfig.plugins = webpackConfig.plugins.concat(pluginHtmls);

if (showMeMore) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
