const baseExtends = [
    "squirrels-base",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
];

const rulesExtends = [
    "./rules/syntax.js"
].map(require.resolve);

module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "react"
    ],
    extends: [
        ...baseExtends,
        ...rulesExtends,
    ],
    parserOptions: {
        emcaVersion: 2018,
        emcaFeatures: {
            jsx: true,
        },
    },
    rules: {},
    settings: {
        react: {
            version: "detect",
        },
    },
};
