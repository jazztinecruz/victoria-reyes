import { ChangeEvent, useId } from "react";

type Props = {
  label: string;
  name: string;
  required?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange: React.Dispatch<React.SetStateAction<any>>;
  className?: string;
};

const Checkbox = ({
  label,
  name,
  required,
  defaultChecked,
  disabled,
  onChange,
  className,
}: Props) => {
  const fieldId = `${name}${useId()}`;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange((state: any) => ({ ...state, [name]: event.target.checked }));
  };

  return (
    <div className="flex items-center gap-3">
      <label htmlFor={fieldId}>{label}</label>
      <input
        id={fieldId}
        type="checkbox"
        required={required}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={handleOnChange}
        className="checkbox checkbox-success "
      />
    </div>
  );
};

export default Checkbox;
