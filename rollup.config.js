import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import babel from "rollup-plugin-babel";
const extensions = [".js", ".ts"];
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "es",
      },
    ],
    plugins: [
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
      terser(),
      resolve({
        extensions,
      }),
      babel({
        exclude: "node_modules/**",
        extensions,
      }),
    ],
  },
];
