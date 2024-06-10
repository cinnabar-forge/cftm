import cinnabarPlugin from "@cinnabar-forge/eslint-plugin";
import globals from "globals";

export default [
  ...cinnabarPlugin.default,
  {
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  },
  {
    ignores: ["src/cinnabar.js", "build/*", "dist/*", "bin/*"],
  },
];
