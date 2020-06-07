const { VueLoaderPlugin } = require('vue-loader')
const path = require("path");
const glob = require("glob");

module.exports = {
    entry: glob.sync('./ClientApp/Applications/**.js').reduce(function (obj, el) {
        obj[path.parse(el).name] = el;
        return obj;
    }, {}),

    output: {
        path: __dirname + '/wwwroot/bundles',
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ],

    mode: "production"
}