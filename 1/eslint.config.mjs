import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import unicorn from 'eslint-plugin-unicorn';

export default [
	{
		languageOptions:
		{
			globals: globals.browser
		},
		plugins: {
			unicorn
		},
		rules: {
			"unicorn/better-regex": "error"
		}

	},
	pluginJs.configs.recommended,
	eslintConfigPrettier
];
