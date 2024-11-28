import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/modules/**/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#FF6600",
				secondary: "#F79950",
				tertiary: "#0f172a",
				primaryContrast: "#fd7c20",
				secondaryContrast: "#0f172a",
				tertiaryContrast: "#D45300",
			},
		},
	},
	plugins: [],
} satisfies Config;
