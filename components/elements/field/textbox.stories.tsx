import Textbox from "./textbox";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Textbox",
  component: Textbox,
  argTypes: {
    type: {
      options: ["text", "email", "password", "date"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Textbox>;

const Template: ComponentStory<typeof Textbox> = (args) => (
  <Textbox {...args} />
);
export const Default = Template.bind({});
Default.args = {
  type: "text",
  label: "Textbox Label",
  name: "field",
  defaultValue: "",
  placeholder: "Type here...",
  valid: true,
  focus: false,
  required: false,
  readOnly: false,
  disabled: false,
  onChange: () => {},
  className: "",
};
