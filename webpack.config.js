// # Webpack Configuration
module.exports = {
    mode: "development",
    entry: `${process.cwd()}/worlds/development/index.js`,
    output: {
        path: `${process.cwd()}/worlds/app`,
        filename: "why.violet.js"
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        },
        extensions: ["*", ".js", ".vue", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [ "style-loader", "css-loader", "sass-loader" ]
            }
        ]
    },
    watch: true
};