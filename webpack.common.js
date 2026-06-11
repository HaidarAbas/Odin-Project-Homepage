import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "node:path";

export default {
    entry: {
        app: "./src/script.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Production",
        }),
    ],
    output: {
        filename: "main.bundle.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};