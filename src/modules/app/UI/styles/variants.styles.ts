// primary: "#fd7c20",
// secondary: "#F79950",
// tertiary: "##0f172a",
// primaryContrast: "#F79950",
// secondaryContrast: "#FF6600",
// tertiaryContrast: "#D45300",

export default {
	text: {
		primary: `text-primary dark:text-primaryContrast`,
		secondary: `text-secondary dark:text-secondaryContrast`,
		tertiary: `text-tertiary dark:text-tertiary`,
		default: `text-black dark:text-white`,
	},
	background: {
		primary: `bg-primary  dark:bg-primaryContrast`,
		secondary: `bg-secondary  dark:bg-secondaryContrast`,
		tertiary: `bg-tertiary  dark:bg-tertiary`,
		default: ``,
	},
	border: {
		primary: `border-2 border-primary dark:border-primaryContrast`,
		secondary: `border-2 border-secondary dark:border-secondaryContrast`,
		tertiary: `border-2 border-tertiary dark:border-tertiary`,
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
