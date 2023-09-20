const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
    alias({
        '@apis': 'src/apis',
        '@assets': 'src/assets',
        '@components': 'src/components',
        '@constants': 'src/constants',
        '@helpers': 'src/helpers',
        '@pages': 'src/pages',
        '@routes': 'src/routes',
        '@stores': 'src/stores',
        '@styles': 'src/styles',
        '@utils': 'src/utils',
    })(config);
    return config;
};