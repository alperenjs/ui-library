import tseslint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
    // Global ignores (same idea as .eslintignore)
    {
        ignores: ['node_modules', 'dist', 'build', 'coverage'],
    },

    // TypeScript ESLint recommended rules for TS/JS
    ...tseslint.configs.recommended,

    // Project-specific rules
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            // Run Prettier as an ESLint rule (keeps ESLint + Prettier in sync)
            'prettier/prettier': 'error',
        },
    },

    // Turn off stylistic rules that conflict with Prettier
    eslintConfigPrettier,
)
