module.exports = {
	plugins:
		process.env.NODE_ENV === 'production'
			? 
			[
				require('tailwindcss'),
				require('postcss-flexbugs-fixes'),
				require('autoprefixer'),
				require('cssnano'),
			]
			: 
			[
				require('tailwindcss'), 
				require('autoprefixer')
			],
}
