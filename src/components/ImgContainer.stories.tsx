import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// import { ImgContainer } from './ImgContainer';

export const ImgContainer = () => {
  return (
    <div
      className="w-48 h-48 bg-teal-500 p-4
    rounded-lg border border-white shadow-lg"
    >
      ImgContainer
    </div>
  );
};

export default {
  title: "Component/ImgContainer",
  component: ImgContainer,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ImgContainer>;

const Template: ComponentStory<typeof ImgContainer> = (args) => (
  <ImgContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {};
