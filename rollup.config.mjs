import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import svgr from "@svgr/rollup";
import postcss from "rollup-plugin-postcss";

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";

// import typescript from "rollup-plugin-typescript2";

import dts from "rollup-plugin-dts";

import pcg from "./package.json" assert { type: "json" };
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pcg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pcg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: ["react", "react-dom"],
    plugins: [
      peerDepsExternal(),
      svgr(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        minimize: true,
        modules: true, // <--- this line
        extract: true,
        inject: {
          insertAt: "top",
        },
      }),

      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
