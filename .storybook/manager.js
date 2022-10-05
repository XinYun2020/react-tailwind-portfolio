// .storybook/manager.js

import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  base: "light", // this will inherit the base properties of Storybooks'light theme

  // Base color
  colorSecondary: "#7F9C92", // Chateau Green

  // UI
  appBg: "#F6F9FC",
  appContentBg: "#FFFFFF",
  appBorderColor: "rgba(0,0,0,.1)",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#333333",
  textInverseColor: "#FFFFFF",
  textMutedColor: "#666666",

  // Toolbar default and active colors
  barTextColor: "#999999",
  barSelectedColor: "#7F9C92",
  barBg: "#FFFFFF",

  // Form colors
  inputBg: "#FFFFFF",
  inputBorder: "rgba(0,0,0,.3)",
  inputTextColor: "#333333",
  inputBorderRadius: 4,

  // Brand assets
  brandTitle: "My Storybook",
  brandUrl: "https://github.com/XinYun2020/react-tailwind-portfolio",
  //   brandImage:
  //     "",
});

addons.setConfig({
  theme,
});
