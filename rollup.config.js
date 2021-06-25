const dist = 'dist';
const bundle = 'fxc-starter-web-rollup';
const fs = require('fs');
const {version} = require('./package.json');
const json = require('@rollup/plugin-json');

if(!fs.existsSync(dist)) fs.mkdirSync(dist);

const production = !process.env.ROLLUP_WATCH
export default {
	input: 'src/index.js',
	output: [
		{
			name: 'lhimIIFE',
			file: `${dist}/${bundle}.js`,
			format: 'iife'
		},
		{
			name: 'lhimIIFE2',
			file: `${dist}/${bundle}-${version}.js`,
			format: 'iife'
		}
	],
	plugins:[json()]
}