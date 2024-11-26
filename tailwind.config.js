/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./layouts/**/*.html", "./content/**/*.{html,md}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat'],
				system: ['system-ui']
			},
			colors: {
				green: {
					500: '#4db54c'
				},
				orange: {
					300: '#FFA100',
					500: '#ff7f00'
				},
				yellow: {
					500: '#FFFF00'
				}
			},
		},
	},
	plugins: [],
};
