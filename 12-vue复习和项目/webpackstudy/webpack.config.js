const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');  // 压缩js  如果你压缩了css 即使在生产模式下 js它不会压缩了 需要我们手动压缩
module.exports = {
    // mode:"development", 
    mode:"production",  // 只有在生产模式下，才考虑js和css压缩问题
    entry:"./src/main.js",
    output:{
        filename:"bundle.[hash].js", 
        path:path.resolve(__dirname,"dist")
    },
    devServer:{
        port:"8080", 
        compress:true, 
        open:true,  
        contentBase:path.resolve(__dirname,"dist"), 
        hot:true, 
    },
    plugins:[  
        new htmlWebpackPlugin({ 
            template:"./public/index.html",
            filename:"index.html",
            hash:true,
            minify:{
                removeComments: true,  
                collapseWhitespace:true, 
                minifyCSS:true, 
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].min.css',
        }),
    ],
    module:{  
        rules:[  
            {
                test:/\.(css|less)$/i, 
                use:[
                    MiniCssExtractPlugin.loader,  
                    "css-loader",  
                    "postcss-loader", 
                    {
                        loader:"less-loader",
                        options:{
                        }
                    }
                ]
            },
            // {
            //     test:/\.(jpg|png|gif|webp|ico)$/i,
            //     use:["file-loader"]  // 不管图片大小，都是原样输出
            // },
            {
                test:/\.(jpg|png|gif|webp|ico)$/i,  // 使用urlloader可以把图片转成字符串
                use:{
                    loader:"url-loader",  
                    options:{
                        limit:38*1024  // 如果图片小于38k，就把图片转成base64编码,如果大于38k,就原样输出
                    }
                }
            },
            {
                test:/\.(svg|ttf|eot|woff2)$/i,
                use:["url-loader"]
            },
            {
                test:/\.(mp3|ogg|wav)$/i,
                use:["url-loader"]
            },
            {
                test:/\.(mp4|avi|ogv)$/i,
                use:["url-loader"]
            },
            {
                test:/\.vue)$/i,
                use:["vue-loader"]
            }
        ]
    },
    optimization:{ // 设置优化项
        minimizer: [  // 设置压缩方式
            new OptimizeCSSAssetsPlugin(), // 压缩css  注意 如果你压缩了css  js它就不压缩
            new UglifyJsPlugin({   // 压缩js
                cache: true,  // 是否使用缓存
                parallel: true,  // 是否是并发编译 
                sourceMap: true // 是否启动源码映射 （方便调试）
            }),
        ]
    }
}













