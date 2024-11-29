// primaryCustom: "#fd7c20",
// secondaryCustom: "#F79950",
// tertiaryCustom: "##0f172a",
// primaryContrastCustom: "#F79950",
// secondaryContrastCustom: "#FF6600",
// tertiaryContrastCustom: "#D45300",

export default {
	text: {
		primary: `text-primaryCustom dark:text-primaryContrastCustom`,
		secondary: `text-secondaryCustom dark:text-secondaryContrastCustom`,
		tertiary: `text-tertiaryCustom dark:text-tertiaryContrastCustom`,
		default: `text-black dark:text-white`,
	},
	background: {
		primary: `bg-primaryCustom  dark:bg-primaryContrastCustom`,
		secondary: `bg-secondaryCustom  dark:bg-secondaryContrastCustom`,
		tertiary: `bg-tertiaryCustom  dark:bg-tertiaryContrastCustom`,
		default: `bg-transparent dark:bg-transparent`,
	},
	rounded: {
		sm: `rounded-sm`,
		md: `rounded-md`,
		lg: `rounded-lg`,
		xl: `rounded-xl`,
		xxl: `rounded-2xl`,
		xxxl: `rounded-3xl`,
		default: ``,
	},
	border: {
		primary: `border-2 border-primaryCustom dark:border-primaryContrastCustom`,
		secondary: `border-2 border-secondaryCustom dark:border-secondaryContrastCustom`,
		tertiary: `border-2 border-tertiaryCustom dark:border-tertiaryContrastCustom`,
		default: ``,
	},
	fontSize: {
		sm: `text-sm`,
		md: `text-md`,
		lg: `text-lg`,
		xl: `text-xl`,
		xxl: `text-2xl`,
		xxxl: `text-3xl`,
		default: ``,
	},
	padding: {
		sm: `p-2`,
		md: `p-4`,
		lg: `p-6`,
		xl: `p-8`,
		xxl: `p-10`,
		xxxl: `p-12`,
		default: ``,
	},
	justify: {
		start: `justify-start`,
		center: `justify-center`,
		end: `justify-end`,
		default: ``,
	},
};
