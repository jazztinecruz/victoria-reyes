import Checkbox from "./checkbox";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);
export const Default = Template.bind({});
Default.args = {
  label: "Textbox Label",
  name: "field",
  required: false,
  defaultChecked: false,
  disabled: false,
  onChange: () => {},
  className: "",
};
