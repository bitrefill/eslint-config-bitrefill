module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'standard',
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:promise/recommended',
        'plugin:security/recommended'
    ],
    env: {
        node: true,
    },
    globals: {
        Proxy: true,
    },
    plugins: [
        'import',
        '@typescript-eslint',
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx',]
        },
        'import/extensions': ['.js', '.ts'],
        'import/resolver': { typescript: true, node: true }
    },
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4, {
            SwitchCase: 1,
        }],
        'max-len': ['error', 120, {
            tabWidth: 4,
            ignoreUrls: true,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'space-before-function-paren': 0,
        'comma-dangle': 0,
        'function-paren-newline': 0,
        'operator-linebreak': 0,
        'multiline-ternary': 0,
        'no-useless-catch': 'warn',
        'spaced-comment': 'off',

        'generator-star-spacing': 0,

        'promise/param-names': 0,
        'promise/catch-or-return': 0,
        'promise/always-return': 0,

        'import/order': ['warn', { groups: ['builtin', 'external', ['parent', 'sibling'], 'index'] }],
        'import/prefer-default-export': 0,
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-cycle': 1,
        'import/no-import-module-exports': 1,
        'import/no-useless-path-segments': 1,
        'import/no-webpack-loader-syntax': 0,

        // need to use typescript over built in rule to work with types
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': [
            2,
            {
                argsIgnorePattern: 'req|res|next|prevProps|_',
                varsIgnorePattern: '_',
                ignoreRestSiblings: true,
            }
        ],

        'object-curly-newline': 'warn',

        'no-useless-escape': 1,
        'prefer-promise-reject-errors': 0,
        'no-fallthrough': 0,
        'object-literal-sort-keys': 0,
        'member-access': 0,
        'prefer-const': 1,
        'interface-name': 0,
        'no-submodule-imports': 0,
        'no-implicit-dependencies': 0,
        'no-var-requires': 0,
        'no-shadowed-variable': 0,
        'no-empty': 0,
        'max-classes-per-file': 0,
        'variable-name': 0,
        'no-console': 0,
        radix: 0,
        camelcase: 0,
        'no-case-declarations': 0,
        'no-useless-constructor': 0,
        'dot-notation': 0,
        'no-prototype-builtins': 0,
        'no-useless-return': 1,
        'no-return-assign': 0,
        'no-use-before-define': 0,
        'no-mixed-operators': 0,
        'no-multiple-empty-lines': ['warn', { max: 1 }],

        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/ban-ts-comment': 1,
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/no-namespace': 'warn',
        '@typescript-eslint/no-inferrable-types': 'warn',

        'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

        'security/detect-object-injection': 0,
    },
    overrides: [
        {
            files: [
                '*.js'
            ],
            rules: {
                'import/order': 0
            }
        },
        {
            files: [
                '*.d.ts'
            ],
            rules: {
                '@typescript-eslint/no-unused-vars': 0,
                'no-undef': 0
            }
        },
    ]
};
