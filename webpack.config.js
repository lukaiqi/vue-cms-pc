// 引入node的path模块
const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 向外暴露一个配置对象
module.exports = {
    entry: './src/main.js', //入口文件，源文件名字
    output: {
        path: path.join(__dirname, './dist'),    //出口，目标文件路径
        filename: 'bundle.js'
    },
    plugins: [
        new htmlwebpackplugin({
            // 创建一个在内存中生成html页面的插件
            template: './src/index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
    ],
    module: { //匹配所有第三方模块，加载器
        rules: [ //所有第三方模块的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //处理.css文件的规则
            { test: /\.(jpg|png|jpeg|bmp|gif)$/, use: 'url-loader?limit=1000&name=[hash:8]-[name].[ext]' }, //处理图片路径
            // limit：如果给定的图片大于或等于给定的值啧不会被转成bse64
            { test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'url-loader' },   //处理字体文件的loader
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },  //配置babel-loader
            { test: /\.vue$/, use: 'vue-loader' },
        ]
    },
}