const fs = require('fs');
const webpack = require('webpack');

module.exports = class WebpackPlugin {
    constructor (options) {
        this.options = options || {
            path: './src',
            identifier: 'DIRECTORY_INDEX',
        };
    }

    // Recursively walk through a directory and return its structure.
    _walk (dir) {
        const results = [];

        fs.readdirSync(dir).forEach((item) => {
            const itemPath = `${dir}/${item}`;
            const itemStat = fs.statSync(itemPath);

            const itemObj = {
                name: item,
            };

            // Recurse into a subdirectory.
            if (itemStat && itemStat.isDirectory()) {
                itemObj.items = this._walk(itemPath);
            }

            results.push(itemObj);
        });

        return results;
    }

    apply (compiler) {
        const directoryIndex = this._walk(this.options.path);
        const definePluginInstance = new webpack.DefinePlugin({
            [this.options.identifier]: JSON.stringify(directoryIndex),
        });

        return definePluginInstance.apply(compiler);
    }
};