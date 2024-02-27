module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        jest: true,
    },
    extends: 'airbnb-base',
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'linebreak-style': ['error', 'unix'],
        indent: ['error', 4],
    },
};
