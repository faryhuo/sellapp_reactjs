/*
* @Author: Fary
* @Date:   2018-01-13 11:26:52
* @Last Modified by:   Fary
* @Last Modified time: 2018-02-07 10:35:01
*/
const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const jsonData=require("./seleniumData.json");

let WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
console.log(WEBPACK_ENV); 
module.exports = {
    entry: {
        index:'./src/public/app.jsx',
        login:'./src/public/login.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: WEBPACK_ENV === 'dev' 
            ? '/dist/' : '/sellapp/',
        filename: 'js/[name].js'
    },
    resolve: {
        alias : {
            page        : path.resolve(__dirname, 'src/page'),
            component   : path.resolve(__dirname, 'src/component'),
            util        : path.resolve(__dirname, 'src/util'),
            store        : path.resolve(__dirname, 'src/store'),
            service     : path.resolve(__dirname, 'src/service'),
            "@"          :path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            // react(jsx)语法的处理
            {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react',"latest","mobx"],
                        plugins: [/*"transform-runtime"*/
                        ["import", { "libraryName": "antd-mobile", "style": "css" }] ]
                    }
                }
            },
            // css文件的处理
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            // sass文件的处理
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            // styl文件的处理
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'stylus-loader']
                })
            },
            // 图片的配置
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            },
            // 字体图标的配置
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 48192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // 处理html文件 
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/public/index.html',
            favicon: './src/public/favicon.ico',
            chunks:["common","index"]
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './src/public/login.html',
            favicon: './src/public/favicon.ico',
            chunks:["common","login"]
        }),
        // 独立css文件
        new ExtractTextPlugin("css/[name].css"),
        // 提出公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename: 'js/base.js'
        })

    ],
    devtool: process.env.WEBPACK_ENV=="online"?false:'#cheap-module-eval-source-map',//'cheap-module-eval-source-map',
    devServer: {
        clientLogLevel: 'warning',
        //quiet: true, // necessary for FriendlyErrorsPlugin
        port: 8080,
        host: '0.0.0.0', 
        watchOptions: {
          poll: false
        },
        disableHostCheck: true,
        open:false,
        historyApiFallback: {
            index:'/dist/index.html',
            rewrites:[{
                from:"/login",to:'/dist/login.html'
            }]
        },
        before(app){
            app.get('/api/getAccountList', function (req, res) {
              res.json({
                status: 0,
                data: jsonData.accountList
              })
            })
            app.get("/api/getInstrunmentList", function (req, res) {
                res.json({
                  status: 0,
                  data: jsonData.instrunmentList
                })
            });
        },
        proxy : {
        }
    }
};