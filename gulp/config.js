module.exports = {
    watch: false,
    prod: false,
    src: 'source/',
    dest: './output/',
    imageDir: './output/assets/',
    outputJadeIncludes: true,
    watchDest: ['output/**/*', '!output/**/*.html'],
    extensionlessRoutes: false, // WARNING: Experimental
    folders: [
        '160x600',
        '300x250',
        '320x50',
        '728x90',
    ]
};
