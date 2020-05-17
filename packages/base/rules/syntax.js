module.exports = {
    rules: {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "eol-last": "error",
        "arrow-parens": "off",
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "functions": "always-multiline",
            "exports": "always-multiline",
        }],
        "function-paren-newline": "off",
        "no-console": "warn",
        "no-undef": "warn",
        "no-underscore-dangle": "off",
        "no-unused-vars": "warn"
    },
};
