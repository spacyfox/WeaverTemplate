const util = require('gulp-util');

const production = util.env.production || util.env.prod || false;
const srcPath = 'src';
const destPath = 'build';

const config = {
    env       : 'development',
    production: production,

    src: {
        root         : srcPath,
        sass         : srcPath + '/sass',
        sassGen      : srcPath + '/sass/generated',
        css          : srcPath + '/css',
        js           : srcPath + '/js',
        jsTemp       : srcPath + '/js/.temp',
        libs         : srcPath + '/libs',
        img          : srcPath + '/img',
        fonts        : srcPath + '/fonts',

        svg          : srcPath + '/img/svg',

        icons        : srcPath + '/icons',
        iconsPng     : srcPath + '/icons',
        iconsSvg     : srcPath + '/icons',

        iconsFont    : srcPath + '/icons',

        templates    : srcPath + '/templates',
    },

    dest: {
        root : destPath,
        html : destPath,
        css  : destPath + '/css',
        js   : destPath + '/js',
        img  : destPath + '/img',
        fonts: destPath + '/fonts',
    },

    setEnv: function (env) {
        if (typeof env !== 'string') return;
        this.env = env;
        this.production = env === 'production';
        process.env.NODE_ENV = env;
    },

    logEnv: function () {
        util.log(
            'Environment:',
            util.colors.white.bgRed(' ' + process.env.NODE_ENV + ' ')
        );
    },

    errorHandler: require('./util/handle-errors')
};

config.setEnv(production ? 'production' : 'development');

module.exports = config;
