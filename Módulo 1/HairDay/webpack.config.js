const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebPackPlugin = require("copy-webpack-plugin");


module.exports = {
    target: "web",
    mode: "development",
    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
        filename: "main.js",

    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        liveReload: true,
    },

    plugins: [new HtmlWebPackPlugin({
        template: path.resolve(__dirname, "index.html"),
        favicon: path.resolve("src", "assets", "scissors.svg")
    }),
    new CopyWebPackPlugin({
        patterns: [{
            from: path.resolve(__dirname, "src", "assets"),
            to: path.resolve(__dirname, "dist", "src", "assets"),
        }]
    })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    }
                },
            },
        ]
    }
}