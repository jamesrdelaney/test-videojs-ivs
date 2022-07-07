module.exports = {
    module: {
        rules: [
            {
                test: /[\/\\]amazon-ivs-player[\/\\].*dist[\/\\]assets[\/\\]/,
                loader: 'file-loader',
                type: 'javascript/auto',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'static/ivs-player',
                    publicPath: 'static/ivs-player'
                }
            }
        ],
    },
};
