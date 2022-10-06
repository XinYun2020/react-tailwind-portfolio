module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  // "`stories`": ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-typescript",
    "@storybook/addon-actions",
    "@storybook/preset-scss",
    "@storybook/addon-coverage",
    "@storybook/addon-a11y", //👈 The a11y addon goes here
    "@storybook/addon-jest",
  ],
  framework: "@storybook/react",
  features: {
    interactionsDebugger: true,
  },
  core: {
    // builder: "webpack5",
    builder: "@storybook/builder-webpack5",
  },
};
