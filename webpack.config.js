
const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
  mode: 'development',
  // entry: {
  //    app: resolve(__dirname, 'src/bootstrap.tsx')
  // },
  entry:[
    resolve(__dirname, 'src/test.jsx')
  ],
  output: {
    filename: '[name].[hash:8].js',
    path: resolve(__dirname, 'dist')
  },

  module: {
    
    rules: [
        {
          test: /\.scss/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
            {
                loader: 'sass-resources-loader',
                options: {
                  resources: [resolve(__dirname, 'src/themes/global.scss')]
                }
            }
          ]
        },
        {
          test: /\.css/,
          use: [
            'style-loader',
            'css-loader',
          ]
        },
       
        {
            test: /\.jsx?$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-react'
                ],
                plugins: ['react-hot-loader/babel']
              }
            }
        },
        {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                      '@babel/preset-react'
                  ],
                  plugins: ['react-hot-loader/babel']
                }
              },
              'ts-loader'
            ]
        },
        {
          test: /\.(jpg|jpeg|svg|png|gif|)$/i,
          use: {
            loader:'url-loader',
            options: {
              limit: 80 * 1024 
            }
          }
        }
    ]

  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.js', 'jsx', '.ts', '.tsx', '.json']
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin('created by icome team at ' + new Date().toLocaleString()),
    new HtmlWebpackPlugin({
      title: '环境测试',
      template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),

  ],

  devServer: {
    port:8090,
    hot: true,
    contentBase: resolve(__dirname, 'dist')
  }
}