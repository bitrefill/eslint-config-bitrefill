module.exports = {
    extends: [
        'plugin:jest/recommended'
    ],
    plugins: [
        'jest',
    ],
    env: {
        'jest/globals': true,
    },
    rules: {
        'jest/expect-expect': 0,
        'jest/no-test-prefixes': 1,
    }
};
