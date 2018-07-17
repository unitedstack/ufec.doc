/**
 * @PengJiyuan
 */
const path = require('path');
const fs = require('fs');
const autoprefixer = require('autoprefixer');
const os = require('os');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const lessToJs = require('less-var-parse');

let language = process.env.npm_config_lang || process.env.language;

// Default language
if (!language) {
  language = 'zh-CN';
}

const entry = {};
fs.readdirSync('./applications')
  .filter(m => fs.statSync(path.join('./applications', m)).isDirectory())
  .forEach((m) => {
    entry[m] = ['babel-polyfill', `./applications/${m}/index.jsx`];
  });

const themer = lessToJs(fs.readFileSync(path.join(__dirname, './theme/index.less'), 'utf8'));

const webpackConfig = {

  mode: 'production',

  context: __dirname,

  entry,

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: `[hash:6].${language}.[name].min.js`,
    publicPath: '.'
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
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
      use: {
        loader: 'file-loader',
        options: {
          limit: 1000,
          name: '/fonts/[hash:8].icon.[ext]'
        }
      }
    }],
    noParse: [
      /moment/g
    ]
  },

  // only show valid/invalid and errors
  // deal with verbose output
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
    },
    minimizer: [
      new UglifyJSPlugin({
        parallel: os.cpus().length
      })
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[hash:6].[name].min.css',
      chunkFilename: '[id].css'
    })
  ],

  resolve: {
    extensions: ['.jsx', '.js', 'json'],
    modules: [
      path.resolve(__dirname, '../'),
      'node_modules'
    ],
    alias: {
      react: 'node_modules/react',
      'react-dom': 'node_modules/react-dom'
    }
  }
};

const prefix = language === 'en' ? 'en_' : '';

const pluginHtmls = Object.keys(entry).map(id => new HtmlWebpackPlugin({
  filename: `${id === 'dashboard' ? `${prefix}index` : (prefix + id)}.html`,
  inject: true,
  template: path.resolve(__dirname, `html/${language}/${id}.html`)
}));

webpackConfig.plugins = webpackConfig.plugins.concat(pluginHtmls);

module.exports = webpackConfig;
