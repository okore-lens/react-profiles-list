/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#397754",
				secondary: "#f0a3bc",
				subtle: "#70be51",
				tertiary: "#eb6b40",
				mild: "#9b45b2",
			},
		},
	},
	plugins: [],
};
