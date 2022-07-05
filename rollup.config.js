
import { babel } from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import postcss from "rollup-plugin-postcss";
import postCssImport from "postcss-import";

const outputFolder = "public";
const watching = process.env.ROLLUP_WATCH === "true";

export default {
  input: "src/index.js",
  output: {
    file: `${outputFolder}/app.js`,
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    babel({ babelHelpers: "bundled" }),
    postcss({ plugins: [postCssImport] }),
  ].concat(
    watching
      ? [
          serve({ contentBase: outputFolder, port: 10001, verbose: true }),
          livereload(),
        ]
      : []
  ),
};
