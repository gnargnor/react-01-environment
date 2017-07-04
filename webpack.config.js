const path = require('path');

module.exports = {
    //follow import tree of index.js (entry point) and prepare app.bundle.js according to settings
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js',
    }
};