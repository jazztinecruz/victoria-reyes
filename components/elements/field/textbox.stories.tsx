import Textbox, { Props } from "./textbox";

type Story<type> = {
  (args: type): JSX.Element;
  args?: type;
};

export default {
  title: "Textbox",
  component: Textbox,
};

const Template: Story<Props> = (args) => <Textbox {...args} />;
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
