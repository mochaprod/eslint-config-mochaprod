module.exports = {
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-empty-interface": "warn",
        "react/prop-types": "off",
        "react/self-closing-comp": "error",
        "react/destructuring-assignment": ["error", "always"],
        "react/jsx-closing-bracket-location": [2, "tag-aligned"],
        "react/jsx-closing-tag-location": "error",
        "react/jsx-first-prop-new-line": ["error", "always"],
        "react/jsx-no-useless-fragment": "error",
        "react/jsx-max-props-per-line": [
            "error",
            {
                when: "always",
                maximum: 1,
            },
        ],
        "react/jsx-curly-spacing": [
            2,
            {
                when: "always",
                allowMultiline: false,
                children: {
                    when: "always",
                },
                spacing: {
                    objectLiterals: "always",
                },
            },
        ],
        "react/jsx-one-expression-per-line": [2, { allow: "literal" }],
        "react/display-name": "off",
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-tag-spacing": [
            2,
            {
                beforeSelfClosing: "proportional-always",
            },
        ],
        "react/jsx-wrap-multilines": [
            2,
            {
                declaration: "parens-new-line",
                assignment: "parens-new-line",
                return: "parens-new-line",
                arrow: "parens-new-line",
                condition: "ignore",
                logical: "ignore",
                prop: "ignore",
            },
        ],
    },
};
