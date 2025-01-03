import pluginJs from '@eslint/js';
import importHelpers from 'eslint-plugin-import-helpers';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { sourceType: 'commonjs' }
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    ignores: [
      '**/*.d.ts',
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      '**/public/**',
      '**/plop-templates/**'
    ],

    plugins: {
      'react-hooks': reactHooks,
      'import-helpers': importHelpers
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            ['/^react/', '/^next/'],
            'module',
            '/^@shared/',
            'absolute',
            '/^components/',
            '/^pages/',
            '/utils/',
            '/constants/',
            '/^store/',
            '/^styles/',
            '/^templates/',
            ['parent', 'sibling', 'index']
          ],
          alphabetize: {
            order: 'asc',
            ignoreCase: true
          }
        }
      ],
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'crlf',
          plugins: ['prettier-plugin-tailwindcss']
        }
      ]
    }
  }
];
