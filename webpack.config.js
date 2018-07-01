const path = require('path');
module.exports = {
    mode: 'development',
    entry:   './src/app.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            // rules for modules (configure loaders, parser options, etc.)
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "app")
                ],
                exclude: [
                    path.resolve(__dirname, '/node_modules/')
                ],
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}

/* module.exports = {
    mode: 'development'
  }; */