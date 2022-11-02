import Checkbox, { Props } from "./checkbox";

type Story<type> = {
  (args: type): JSX.Element;
  args?: type;
};

export default {
  title: "Checkbox",
  component: Checkbox,
};

const Template: Story<Props> = (args) => <Checkbox {...args} />;
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
