/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				dark: "#1a202c",
			},
		},
	},
	variants: {
		backgroundColor: ["responsive", "hover", "focus", "dark"],
	},
	plugins: [],
};
