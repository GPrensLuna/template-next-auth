import { fixupPluginRules } from "@eslint/compat";
import eslintPluginNext from "@next/eslint-plugin-next";
import vercelStyleGuideNext from "@vercel/style-guide/eslint/next";
import vercelStyleGuideTypescript from "@vercel/style-guide/eslint/typescript";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintPluginUnusedImport from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
	// Ignores configuration
	{
		ignores: [
			"node_modules",
			".next",
			"out",
			"coverage",
			".idea",
			"src/UI/components/ui/**.tsx",
			"**/*.test.js", // Ignorar archivos .test.js
			"**/*.test.ts", // Ignorar archivos .test.ts
			"**/*.test.jsx", // Ignorar archivos .test.jsx
			"**/*.test.tsx", // Ignorar archivos .test.tsx
			"**/*.spec.js", // Ignorar archivos .spec.js
			"**/*.spec.ts", // Ignorar archivos .spec.ts
			"**/*.spec.jsx", // Ignorar archivos .spec.jsx
			"**/*.spec.tsx", // Ignorar archivos .spec.tsx
		],
	},
	// General configuration
	{
		rules: {
			"padding-line-between-statements": [
				"warn",
				{ blankLine: "always", prev: "*", next: ["return", "export"] },
				{
					blankLine: "always",
					prev: ["const", "let", "var"],
					next: "*",
				},
				{
					blankLine: "any",
					prev: ["const", "let", "var"],
					next: ["const", "let", "var"],
				},
			],
			"no-console": "warn",
			"no-alert": "warn", // Evita el uso de `alert`, `confirm`, etc.
			"no-debugger": "warn", // Evita el uso de `debugger`
			"no-empty-function": "off", //! Previene funciones vacías
			"prefer-const": "warn", // Asegura el uso de `const` cuando sea posible
			"consistent-return": "warn", // Asegura que las funciones tengan un `return` consistente
			eqeqeq: "warn", // Asegura el uso de `===` y `!==` en lugar de `==` y `!=`
			"lines-between-class-members": "warn", // Evita espacios en blanco entre clases
		},
	},
	// React configuration
	{
		plugins: {
			react: fixupPluginRules(eslintPluginReact),
			"react-hooks": fixupPluginRules(eslintPluginReactHooks),
			"react-compiler": fixupPluginRules(eslintPluginReactCompiler),
			"jsx-a11y": fixupPluginRules(eslintPluginJsxA11y),
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
				...globals.serviceworker,
			},
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			...eslintPluginReact.configs.recommended.rules,
			...eslintPluginJsxA11y.configs.recommended.rules,
			...eslintPluginReactHooks.configs.recommended.rules,
			...vercelStyleGuideReact.rules,
			"react/prop-types": "off",
			"react/jsx-uses-react": "off",
			"react/react-in-jsx-scope": "off",
			"react/self-closing-comp": "warn",
			"react/jsx-sort-props": [
				"warn",
				{
					callbacksLast: true,
					shorthandFirst: true,
					noSortAlphabetically: false,
					reservedFirst: true,
				},
			],
			"react/function-component-definition": [
				"warn",
				{
					namedComponents: "arrow-function",
					unnamedComponents: "arrow-function",
				},
			],
			"react-compiler/react-compiler": "error",
			"react/jsx-no-leaked-render": "off",
			"jsx-a11y/no-static-element-interactions": "off",
			"jsx-a11y/click-events-have-key-events": "off",
			"jsx-a11y/anchor-is-valid": "warn", // Asegura que los enlaces sean válidos
			"jsx-a11y/label-has-associated-control": "warn", // Asegura que las etiquetas `<label>` tengan controles asociados
			"jsx-a11y/no-noninteractive-element-interactions": "warn", // Previene el uso de elementos no interactivos con interacciones
			"jsx-a11y/no-redundant-roles": "warn", // Evita roles redundantes en los elementos
			"jsx-a11y/accessible-emoji": "warn", // Asegura que los emojis sean accesibles
			"jsx-a11y/no-static-element-interactions": "warn", // Evita el uso de elementos estáticos con interacciones
			"jsx-a11y/click-events-have-key-events": "warn", // Asegura que los eventos de clic también tengan eventos de teclado
		},
	},
	// TypeScript configuration
	...[
		...tseslint.configs.recommended,
		{
			rules: {
				...vercelStyleGuideTypescript.rules,
				"@typescript-eslint/no-unused-vars": "warn", // Evita el uso de variables no utilizadas
				"@typescript-eslint/no-non-null-assertion": "off", // Evita el uso de `!` en declaraciones de variables
				"@typescript-eslint/no-shadow": "off", // Evita el uso de `var` en declaraciones de variables
				"@typescript-eslint/explicit-function-return-type": "off", // Desactivar la regla para evitar el mensaje de error
				"@typescript-eslint/require-await": "off", // Evita el uso de promesas sin await en funciones
				"@typescript-eslint/no-floating-promises": "off", // Evita el uso de promesas sin await en funciones
				"@typescript-eslint/no-confusing-void-expression": "off", // Evita el uso de `void` en declaraciones de variables
				"@typescript-eslint/explicit-module-boundary-types": "off", // Requerir declaraciones de tipos de retorno en las funciones
				"@typescript-eslint/no-explicit-any": "error", // Requerir declaraciones de tipos de retorno en las funciones
				"@typescript-eslint/no-inferrable-types": "error", // Requerir declaraciones de tipos de retorno en las funciones
				"@typescript-eslint/explicit-function-return-type": "error", // Requerir declaraciones de tipos de retorno en las funciones
				"@typescript-eslint/no-empty-interface": "error", // Requerir declaraciones de tipos de retorno en las funciones
				"@typescript-eslint/ban-ts-comment": "error", // Evita los comentarios de `@ts-ignore` sin justificación

				"@typescript-eslint/consistent-type-definitions": ["error", "interface"], // Requerir declaraciones de tipos de retorno en las funciones
				"@typescript-eslint/member-ordering": "error", // Requerir declaraciones de tipos de retorno en las funciones
				// "@typescript-eslint/no-magic-numbers": ["error", { ignore: [0, 1] }], // Evita números mágicos
				"@typescript-eslint/no-this-alias": "error", // Evita el uso de `this` en declaraciones de variables
				"@typescript-eslint/adjacent-overload-signatures": "error", // Evita el uso de `=` en declaraciones de variables
				"@typescript-eslint/class-literal-property-style": "error",
				"@typescript-eslint/consistent-generic-constructors": "error",
				"@typescript-eslint/consistent-indexed-object-style": "error",
				"@typescript-eslint/consistent-type-assertions": "error",
				"@typescript-eslint/consistent-type-imports": "error",
				"@typescript-eslint/explicit-member-accessibility": "error",
				"@typescript-eslint/method-signature-style": "error",
				"@typescript-eslint/no-confusing-non-null-assertion": "error",
				"@typescript-eslint/no-duplicate-enum-values": "error",
				"@typescript-eslint/no-extra-non-null-assertion": "error",
				"@typescript-eslint/no-for-in-array": "error",
				"@typescript-eslint/no-import-type-side-effects": "error",
				"@typescript-eslint/no-require-imports": "error",
				"@typescript-eslint/no-unnecessary-type-assertion": "off",
				"@typescript-eslint/no-non-null-assertion": "error",
				"@typescript-eslint/unified-signatures": "off",
				"@typescript-eslint/no-unused-expressions": "off",
			},
		},
	],
	// Prettier configuration
	...[
		eslintPluginPrettier,
		{
			rules: {
				"prettier/prettier": [
					"warn",
					{
						semi: true,
						parser: "typescript",
						useTabs: true, // Cambiado a false para usar espacios
						tabWidth: 2,
						proseWrap: "preserve",
						endOfLine: "lf",
						printWidth: 90,
						quoteProps: "as-needed",
						rangeStart: 0,
						singleQuote: false,
						arrowParens: "always",
						insertPragma: false,
						trailingComma: "all",
						requirePragma: false,
						bracketSpacing: true,
						jsxSingleQuote: false,
						bracketSameLine: true,
						jsxBracketSameLine: true,
						singleAttributePerLine: false,
						htmlWhitespaceSensitivity: "css",
						embeddedLanguageFormatting: "auto",
						plugins: ["prettier-plugin-tailwindcss"],
						overrides: [
							{
								files: "*.{ts,tsx}",
								options: {
									parser: "typescript",
								},
							},
							{
								files: "*.{js,jsx}",
								options: {
									parser: "babel",
								},
							},
							{
								files: "*.vue",
								options: {
									parser: "vue",
								},
							},
							{
								files: "*.css",
								options: {
									parser: "css",
								},
							},
							{
								files: "*.scss",
								options: {
									parser: "scss",
								},
							},
							{
								files: "*.less",
								options: {
									parser: "less",
								},
							},
							{
								files: "*.json",
								options: {
									parser: "json",
								},
							},
							{
								files: "*.md",
								options: {
									parser: "markdown",
								},
							},
							{
								files: "*.yaml",
								options: {
									parser: "yaml",
								},
							},
						],
						importOrder: [
							"^react",
							"^next",
							"<THIRD_PARTY_MODULES>",
							"^@/(.*)$",
							"^[./]",
						],
						importOrderSeparation: true,
						importOrderSortSpecifiers: true,
						importOrderGroupNamespaceSpecifiers: true,
						importOrderCaseInsensitive: true,
						xmlWhitespaceSensitivity: "strict",
						jsonRecursiveSort: true,
						astroAllowShorthand: false,
					},
				],
			},
		},
	],
	// Import configuration
	{
		plugins: {
			import: fixupPluginRules(eslintPluginImport),
		},
		rules: {
			"import/no-default-export": "off", // Evita exportaciones por defecto
			"import/first": "warn", // Asegura que las importaciones estén al principio del archivo
			"import/no-duplicates": "warn", // Evita importaciones duplicadas
			"import/order": [
				"warn",
				{
					groups: [
						"type",
						"builtin",
						"object",
						"external",
						"internal",
						"parent",
						"sibling",
						"index",
					],
					pathGroups: [
						{
							pattern: "~/**",
							group: "external",
							position: "after",
						},
					],
					"newlines-between": "always", // Determina si se usará una nueva línea entre importaciones
				},
			],
		},
	},
	{
		plugins: {
			unused: fixupPluginRules(eslintPluginUnusedImport),
		},
		rules: {
			"unused/no-unused-imports": "warn",
			"unused/no-unused-vars": "warn",
		},
	},
	// Next configuration
	{
		plugins: {
			next: fixupPluginRules(eslintPluginNext),
		},
		languageOptions: {
			globals: {
				...globals.node,
				...globals.browser,
			},
		},
		rules: {
			...vercelStyleGuideNext.rules,
			"next/no-img-element": "warn", // Evita el uso de `<img />` sin `next/image`
		},
	},
];
