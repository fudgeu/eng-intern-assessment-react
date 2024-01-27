import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactHooks, {configs} from 'eslint-plugin-react-hooks';
import js from '@eslint/js';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import babelParser from '@babel/eslint-parser';

export default [
    {
        // Add in default flat configs
        ...reactRecommended,
        ...reactJsxRuntime,
        ...js.configs.recommended,

        // React hooks config, slightly different from the others because it doesn't yet support the new flat configs afaik
        plugins: { 'react-hooks': reactHooks },
        rules: configs.recommended.rules,

        // Stylistic config factory
        ...stylistic.configs.customize({
            semi: true,
            quotes: 'single',
            indent: 4,
        }),

        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: babelParser,
            globals: {
                ...globals.browser, // Add browser environment variables/functions
            },
        },
    },
];