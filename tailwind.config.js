const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	plugins: [require('daisyui')],
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			}
		}
	}
};
