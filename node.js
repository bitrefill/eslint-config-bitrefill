module.exports = {
    extends: [
        'plugin:n/recommended'
    ],
    env: {
        node: true,
    },
    rules: {
        'n/no-process-exit': 0,
        'n/no-deprecated-api': 1,

        // These are handled by eslint-plugin-import
        'n/no-missing-import': 0,
        'n/no-missing-require': 0,
    }
};
