const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, './src/js/app.js'),
	},
	devtool: 'source-map',
	output: {
		filename: "bundle.[chunkhash].js",
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		assetModuleFilename: 'assets/[hash][ext][query]', // Все ассеты будут складываться в dist/assets
	},
	devServer: {
		hot: true,
		port: 3000,
	},
	plugins: [
		new HTMLPlugin({
			title: 'Pinterest',
			filename: 'index.html',
			template: path.resolve(__dirname, './src/template.html'),
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		// new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(html)$/,
				use: ['html-loader']
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
				type: process.env.NODE_ENV === 'production' ? 'asset' : 'asset/resource', // В продакшен режиме изображения размером до 8кб будут инлайнится в код
				// В режиме разработки все изображения будут помещаться в dist/assets
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true, // Использование кэша для избежания рекомпиляции при каждом запуске
					},
				},
				// enforce: 'pre',
				// use: ['source-map-loader'], // если будут проблемы с firebase
			},
		],
	},
}