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
        "block-spacing": ["error", "always"],
        "function-paren-newline": ["error", "multiline-arguments"],
        "max-len": ["error", {
            code: 80,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
        }],
        "no-console": "warn",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": ["error", { max: 1 }],
        "no-trailing-spaces": "error",
        "no-undef": "warn",
        "no-underscore-dangle": "off",
        "no-unused-vars": "warn",
        "object-curly-spacing": ["error", "always"],
        "space-infix-ops": "error",
    },
};
