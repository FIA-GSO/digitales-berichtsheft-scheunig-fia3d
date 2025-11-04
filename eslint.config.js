/* eslint-disable @typescript-eslint/no-magic-numbers */

/** @import { Linter } from 'eslint' */

import config, { globals } from '@mephisto5558/eslint-config';

/**
 * @type {Linter.Config[]}
 * This config lists all rules from every plugin it uses. */
export default [
  ...config,
  {
    ignores: ['min/**']
  },
  {
    name: 'overwrite',
    files: ['**/*.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.es2024,
        ...globals.browser
      }
    },
    rules: {
      'max-nested-callbacks': [
        'warn',
        5
      ],
      'no-return-assign': 'off',
      '@stylistic/max-len': 'off',
      'sonarjs/no-nested-functions': [
        'error',
        { threshold: 4 } // 3, + 1 for IIFE
      ]
    }
  }
];