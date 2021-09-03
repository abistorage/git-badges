import dts from "rollup-plugin-dts";

const config = [
  // …
  {
    input: "./index.d.ts",
    output: [{ file: "dist/my-library.d.ts", format: "es" }],
    plugins: [dts()],
  },
];

export default config;
