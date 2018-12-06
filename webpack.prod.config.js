const fs = require("fs");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const nodeModules = {};
fs.readdirSync("node_modules")
	.filter(x => [".bin"].indexOf(x) === -1)
	.forEach(mod => {
		nodeModules[mod] = `commonjs ${mod}`;
	});

const loaders = {
	js: {
		test: /\.js?/,
		use: "babel-loader"
	},
	ts: {
		test: /\.tsx?$/,
		exclude: /\/node_modules\//,
		use: ["babel-loader", "ts-loader"]
	},
	json: {
		test: /\.json$/,
		use: "json-loader"
	}
};


const server = () => ({
	target: "node",
	mode: "production",
	externals: nodeModules,
	context: `${__dirname}/src/ts/`,
	entry: ["babel-polyfill", `${__dirname}/src/ts/index.ts`],
	resolve: {
		extensions: [".ts", ".js", ".json"]
	},
	output: {
		path: `${__dirname}/build/`,
		filename: `index.js`
	},
	optimization: {
		minimize: true
	},
	module: {
		rules: [loaders.ts, loaders.json]
	}
});
// 
// module.exports = server();
// module.exports = [server(), front("main-screen"), front("touch-screen"), front("control-panel")];
module.exports = [server()];