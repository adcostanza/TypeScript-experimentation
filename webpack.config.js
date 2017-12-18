
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.json$/, loader: "json" },
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test:/\.css$/,
                use: ExtractTextPlugin.extract({
                        fallback:'style-loader',
                        use:['css-loader'],
                    })
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

     plugins: [
       new HtmlWebpackPlugin({
         template: __dirname + "/src/index.htm"
       }),
       new ExtractTextPlugin({filename:'bundle.css'}),
     ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
