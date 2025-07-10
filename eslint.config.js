import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // JS (excluding webpack.config.js)
  {
    files: ['**/*.{js,mjs,cjs}'],
    ignores: ['webpack.config.js'],
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },

  // JSON
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json',
    extends: ['json/recommended'],
  },

  // JSONC
  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'jsonc',
    extends: ['json/recommended'],
  },

  // Node.js config for webpack.config.js
  {
    files: ['webpack.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        __dirname: 'readonly',
        process: 'readonly',
        module: 'readonly',
      },
    },
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'prettier/prettier': 'error',
    },
  },

  // Prettier config last
  prettierConfig,
]);
