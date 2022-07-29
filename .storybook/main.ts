import { stories } from "./storyLoader";

const custom = require("../webpack.config.js");

module.exports = {
  stories: stories,
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: { ...config.resolve.alias, ...custom.resolve.alias },
      },
      module: { ...config.module, rules: custom.module.rules },
    };
  },
};
