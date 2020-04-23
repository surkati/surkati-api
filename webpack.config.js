const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    target: 'node',
    node: {
        __filename: true,
        __dirname: true
    },
    resolve: {
        alias: {
            "@config": path.resolve(__dirname, 'src/config/'),
            "@models": path.resolve(__dirname, 'src/database/models/'),
            "@controllers": path.resolve(__dirname, 'src/controllers/'),
            "@exception": path.resolve(__dirname, 'src/exception/'),
            "@services": path.resolve(__dirname, 'src/services/'),
            "@utils": path.resolve(__dirname, 'src/utils/')
        },
        extensions: [ '.js' ]
    },
    externals: [
        nodeExternals()
    ],
    watchOptions: {
        ignored: ['node_modules', 'build']
    }
}
