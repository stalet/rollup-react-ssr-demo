import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default [
    {
        input: 'client/script.jsx',
        plugins: [
            nodeResolve({
                extensions: [".js",".jsx"],
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify( 'development' ),
                preventAssignment: true
            }),
            babel({
                presets: ["@babel/preset-react"],
            }),
            commonjs()
        ],
        output: {
            file: 'dist/script.js',
            format: 'es',
            sourcemap: true
        }
    },
    {
        input: 'server.jsx',
        plugins: [
            nodeResolve({
                extensions: [".js",".jsx"],
            }),
            json(),
            replace({
                'process.env.NODE_ENV': JSON.stringify( 'development' ),
                preventAssignment: true
            }),
            babel({
                presets: ["@babel/preset-react"],
            }),
            commonjs()
        ],
        output: {
            file: 'dist/server.js',
            format: 'es',
            sourcemap: true
        }
    }

];
