const path = require('path');
const fs = require('fs');

const traverseDirectory = (dir, result = [], topDir = dir) => {
    fs.readdirSync(dir).forEach((fileName) => {
        const absolutePath = path.resolve(dir, fileName);
        const relativePath = path.relative(topDir, absolutePath);

        const fileStats = {
            fileName,
            relativePath,
        };

        // Traverse a sub directory via recursion.
        if (fs.statSync(absolutePath).isDirectory()) {
            fileStats.files = [];
            result.push(fileStats);
            return traverseDirectory(absolutePath, fileStats.files, topDir);
        }

        result.push(fileStats);
    });

    return result;
};

const componentDir = path.resolve(__dirname, './components/dynamic');

module.exports = traverseDirectory(componentDir);
