/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			spacing: {
				144: "36rem",
			},
		},
	},
	plugins: [require("daisyui")],
};
