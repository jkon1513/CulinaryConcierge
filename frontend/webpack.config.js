const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "components/index.js"),
    output:{
        filename: "bundle.js", 
        path: path.resolve(__dirname, "build")
    },
    mode:"development",
    devServer: {
        contentBase: [path.resolve(__dirname, "public"),path.resolve(__dirname,"build")],
        publicPath: "/build/",
        open: true
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: {
                    loader:"babel-loader", 
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }    
                },
            }
        ]
    }
}