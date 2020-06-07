module.exports = {
    rules: {
        "react/prop-types": "off",
        "react/self-closing-comp": "error",
        "react/destructuring-assignment": ["error", "always"],
        "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
        "react/jsx-first-prop-new-line": ["error", "multiline"],
        "react/jsx-no-useless-fragment": "error",
        "react/jsx-max-props-per-line": ["error", {
            when: "always",
            maximum: 1,
        }],
        "react/jsx-curly-spacing": ["error", {
            when: "always",
            spacing: {
                allowMultiline: false,
                objectLiterals: "always",
            },
        }],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-empty-interface": "warn",
    },
};
