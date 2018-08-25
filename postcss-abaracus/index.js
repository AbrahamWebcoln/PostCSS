var postcss = require('postcss');
module.exports = postcss.plugin('postcss-abaracus', function(opts) {
    opts = opts || {};
    // Work with options here
    return function(root, result) {
        root.walkRules(function(rule) {
            rule.walkDecls(/^overflow-?/, function(decl) {
                // We work with each `decl` object here.
                if (decl.value === 'scroll') {
                  rule.append({
                    prop: '-webkit-overflow-scrolling',
                    value: 'touch'
                  })
                }
            });
        });
    };
});
