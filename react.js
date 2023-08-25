module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    plugins: [
        'react',
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'jsx-boolean-value': 0,
        'jsx-no-multiline-js': 0,
        'jsx-no-lambda': 0,
        'react/prop-types': 0,
        'react/display-name': 0,
        'react/no-unescaped-entities': 0,
        'react/jsx-key': 1,
        'react/jsx-curly-brace-presence': 1,
        'react/self-closing-comp': 1,
        'react/prefer-stateless-function': 1,
        'react/function-component-definition': [
            2,
            {
                namedComponents: [
                    'function-declaration',
                    'function-expression'
                ],
                unnamedComponents: 'function-expression'
            }
        ],
        'react/no-deprecated': 1,
        'react/jsx-boolean-value': [
            1
        ],
    },
    overrides: [
        // Allow empty {} as props only for react components
        {
            files: [
                '*.tsx'
            ],
            rules: {
                '@typescript-eslint/ban-types': [
                    2,
                    {
                        extendDefaults: true,
                        types: {
                            '{}': false
                        }
                    }
                ]
            },
        },
        // Allow arrow func in storybook stories for simpler syntax
        {
            files: [
                '*.stories.tsx'
            ],
            rules: {
                'react/function-component-definition': 0
            }
        }
    ]
};
