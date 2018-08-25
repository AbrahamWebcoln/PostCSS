var postcss = require('postcss');

module.exports = postcss.plugin('postcss-abaracus', function(opts) {
    opts = opts || {};

    // Work with options here

    return function(root, result) {

        root.walkRules(function(rule) {
            // We'll put more code here in a moment…
        });

    };
});
