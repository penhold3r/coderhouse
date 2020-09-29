const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const globSassImporter = require('node-sass-glob-importer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: path.join(__dirname, 'src/app/App.js'),
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, './public/'),
		publicPath: './',
	},
	optimization: {
		minimize: false, // angular doesn't like uglify.
		minimizer: [
			new UglifyJsPlugin({
				keep_fnames: true,
				mangle: false,
			}),
		],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.join(__dirname, './app'),
				exclude: /node_modules/,
			},
			{
				test: /\.(s?css)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
						},
					},
					{
						loader: 'css-loader',
						options: {},
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [require('autoprefixer')],
						},
					},
					{
						loader: 'sass-loader',
						options: {
							importer: globSassImporter(),
						},
					},
				],
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options: {
						removeAttributeQuotes: false,
					},
				},
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './images',
							publicPath: '',
						},
					},
				],
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[ext]',
							outputPath: '/fonts',
							publicPath: './fonts',
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/style.css',
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),
		new CopyPlugin({
			patterns: [
				{
					from: 'src/app/components/**',
					to: '.',
					flatten: true,
					globOptions: {
						ignore: ['**.js', '*.js', '*.component.js'],
					},
				},
				{ from: path.join(__dirname, 'src/app/views'), to: 'views' },
				{ from: path.join(__dirname, 'src/app/includes'), to: 'includes' },
				{ from: path.join(__dirname, 'src/app/data'), to: 'data' },
				{ from: path.join(__dirname, 'src/images'), to: 'images' },
			],
			options: {
				concurrency: 100,
			},
		}),
	],
}
