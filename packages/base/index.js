const extendFromPackage = [
    "eslint:recommended",
];

const extendLocally = [
    "./rules/syntax.js",
];

module.exports = {
    env: {
        commonjs: true,
        node: true,
        browser: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 8,
    },
    extends: [
        ...extendFromPackage,
        ...extendLocally.map(require.resolve),
    ]
};
