const tailwindcss = require("tailwindcss");
const postcssPresetEnv = require("postcss-preset-env");

const postcssConfig = {
  plugins: [
    postcssPresetEnv({
      features: {},
    }),
    tailwindcss({}),
  ],
};

module.exports = postcssConfig;
