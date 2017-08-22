module.exports = {
	entry: './src/index.js',
	output: {
		path: '/Users/kinga/Desktop/JavaScriptDev/Module4/Zadanie4/build',
		filename: 'index.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]			
			}
		]
	}
};