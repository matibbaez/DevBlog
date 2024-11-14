/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		backgroundSize: {
			'gradient-dashed': '20px 2px, 100% 2px',
		},
		extend: {
			boxShadow: {
				'devblog-shadow': '0px 25px 50px -12px rgba(0, 0, 0, 0.3)',
			},
			fontFamily: {
				'devblog-inter': ['"Inter"', 'sans-serif'],
				'devblog-space': ['"Space Grotesk"', 'sans-serif'],
			},
			colors: {
				'devblog-primary': '#003049',
				'devblog-secondary': '#f78bff',
				'devblog-accent': '#d087ff',
				'devblog-dark': '#000E14',
				'devblog-white': '#ffffff',
			},
			aspectRatio: {
				'9/10': '9 / 16',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
