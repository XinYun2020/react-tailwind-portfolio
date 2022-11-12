import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TicTacToe from "./TicTacToe";

export default {
  title: "Component/TicTacToe",
  component: TicTacToe,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TicTacToe>;

const Template: ComponentStory<typeof TicTacToe> = (args) => (
  <TicTacToe {...args} />
);

export const Default = Template.bind({});
Default.args = {};
