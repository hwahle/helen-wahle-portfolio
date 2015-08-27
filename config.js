module.exports = function() {
    var client = './public/'

    var config = {
        index: client + '**/*.html',

        js: [
            client + 'app.js',
            client + '**/*.js'
        ],

        css: [
            client + '**/*.css'
        ]
    }

    config.getWiredepDefaults = function() {
        var options = {
            bowerJson: require('./bower.json'),
            directory: './bower_components',
            ignorePath: /^(\.\.\/)*\.\./
        };

        return options
    };

    return config
}
