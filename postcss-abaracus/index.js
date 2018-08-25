var postcss = require('postcss');
module.exports = postcss.plugin('postcss-abaracus', function() {
    // Work with options here
    return function(root) {
        root.walkRules(function(rule) {
            rule.walkDecls(/^overflow-?/, function(decl) {
                // We work with each `decl` object here.
                if (decl.value === 'scroll') {
                    var hasTouch = rule.some(function(i) {
                        return i.prop === '-webkit-overflow-scrolling';
                    });
                    // Don't duplicate overflow scrolling if already in place
                    if (!hasTouch) {
                        rule.append({
                            prop: '-webkit-overflow-scrolling',
                            value: 'touch'
                        });
                    }
                }
            });
        });
    };
});
