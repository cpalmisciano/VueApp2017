"use strict";
{
    // Required to form a complete output path
    const path = require('path');
    const webpack = require('webpack');
    const CleanWebpackPlugin = require('clean-webpack-plugin');

    let pathsToClean = [
        'wwwroot/dist'
    ];

    module.exports = {
        entry: {
            'home': './src/app.js',
            'lists': './Areas/Lists/src/app.js',
            'reports': './Areas/Reports/src/app.js',
            'profile': './Areas/Profile/src/app.js',
            'vendor': ['vue', 'axios', 'vue-router', 'vuex']
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    exclude: /node_modules/,
                    options: {
                        css: 'css-loader',
                        'scss': 'css-loader|sass-loader'
                    }
                },
                //{
                //    test: /\.tsx?$/,
                //    loader: 'ts-loader',
                //    exclude: /node_modules/,
                //    options: {
                //        appendTsSuffixTo: [/\.vue$/]
                //    }
                //},
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: ['style-loader', 'css-loader' ]
                }
            ]
        },
        resolve: {
            //extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.min.js',
                //'vue$': 'vue/dist/vue.esm.js', // Use the full build
                '@Source': path.resolve(__dirname, './src')
            }
        },
        plugins: [
            new CleanWebpackPlugin(pathsToClean),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                    //NODE_ENV: '"development"'
                }
            }),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function (module) {
                    return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
            // minify with dead-code elimination
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ],
        output: {
            path: path.resolve(__dirname, './wwwroot/dist'),
            publicPath: "/VueCore/dist/",
            filename: '[name].js'
        }
    };
}