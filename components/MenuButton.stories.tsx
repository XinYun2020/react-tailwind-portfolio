import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";

import { MenuButton } from "./MenuButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/MenuButton",
  component: MenuButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <div className="d-flex justify-content-center">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof MenuButton>;

const Template: ComponentStory<typeof MenuButton> = (args) => (
  <MenuButton {...args} />
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  name: "Menu Button click me!",
  onClick: linkTo("Component/Menu"), // ,'FinanceInvestigationTool'
};
DefaultButton.parameters = {
  jest: "MenuButton.test.tsx",
};

export const NewFeature = Template.bind({});
NewFeature.args = {
  name: "New Feature Button",
  newFeature: true,
};

export const BetaFeature = Template.bind({});
BetaFeature.args = {
  name: "Beta Feature Button",
  betaFeature: true,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  name: "Disabled Button",
  disabled: true,
};
