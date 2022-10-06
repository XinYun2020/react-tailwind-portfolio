import { DropdownRadix } from "./DropdownRadix";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "ComponentDropdown/Radix",
  component: DropdownRadix,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // parameters: {
  //   backgrounds: {
  //     values: [
  //       { name: 'red', value: '#f00' },
  //       { name: 'green', value: '#0f0' },
  //       { name: 'blue', value: '#00f' },
  //     ],
  //   },
  // },
} as ComponentMeta<typeof DropdownRadix>;

const Template: ComponentStory<typeof DropdownRadix> = (args) => (
  <DropdownRadix {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};
