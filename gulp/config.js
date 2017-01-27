module.exports = {
    watch: false,
    prod: false,
    src: 'source/',
    dest: './output/',
    imageDir: './output/assets/',
    outputJadeIncludes: true,
    watchDest: ['output/**/*', '!output/**/*.html'],
    extensionlessRoutes: false, // WARNING: Experimental
    banners: [
        'barbasol',
        'puresilk'
    ],
    sizes: [
        '300x250',
        '160x600',
        '728x90',
        '320x50'
    ]
};
