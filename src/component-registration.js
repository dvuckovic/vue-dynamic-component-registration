import path from 'path';

const getDynamicComponentRegistration = (componentIndex, componentRegistration = {}) => {
    componentIndex.forEach((fileStats) => {
        // Process only sub-directories and the Vue component files (*.vue).
        if (
            !fileStats.files
            && !path.extname(fileStats.fileName) === '.vue'
        ) {
            return;
        }

        // Process subdirectories recursively.
        if (fileStats.files) {
            return getDynamicComponentRegistration(fileStats.files, componentRegistration);
        }

        let componentName = path.basename(fileStats.fileName, '.vue');

        // Include the component in the registration hash, using its relative path.
        //   Make sure that the component directory referenced below is the same one used to generate
        //   the component index from in the Webpack configuration!
        componentRegistration[componentName] = () => import(`./components/dynamic/${fileStats.relativePath}`);
    });

    return componentRegistration;
};

export default getDynamicComponentRegistration;
