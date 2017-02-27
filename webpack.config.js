module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: './dist/js/bundle.js'
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets:[ 'es2015', 'stage-2' ]
				}
			}
		]
	}
};