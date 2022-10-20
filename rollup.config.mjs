import rollupTypescript from "rollup-plugin-typescript2";
import clear from "rollup-plugin-clear";
import typescript from "typescript";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "./src/main.ts",
  plugins: [
    resolve({
      extensions: [".ts", ".mjs", ".js", ".json", ".node"],
    }),
    clear({ targets: ["dist"] }),
    rollupTypescript({
      include: "src/**/*.ts",
      exclude: "node_modules/**",
      typescript: typescript,
    }),
  ],
  output: [
    {
      format: "esm",
      file: "dist/main.esm.js",
    },
    {
      format: "umd",
      file: "dist/main.umd.js",
    },
  ],
};
