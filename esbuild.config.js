import * as esbuild from 'esbuild'

await esbuild.build({
	bundle: true,
	resolveExtensions: ['.mjs', '.js', '.json', '.node', '.jsx'],
	format: 'esm',
	entryPoints: ['./src/handler.js'],
	minify: true,
	outfile: './dist/lambda.mjs',
	platform: 'node',
	logLevel: 'info',
	legalComments: 'none',
	banner: {
		js: 'import { createRequire } from "module";const require = createRequire(import.meta.url);'
	},
	sourcemap: false
})