import { ChangeEvent, useId } from "react";

type Props = {
  label: string;
  name: string;
  required?: boolean;
  onChange: React.Dispatch<React.SetStateAction<any>>;
  className?: string;
};

const Checkbox = ({ label, name, required, onChange, className }: Props) => {
  const fieldId = `${name}${useId()}`;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange((state: any) => ({ ...state, [name]: event.target.checked }));
  };

  return (
    <div>
      <label htmlFor={fieldId}>{label}</label>
      <input
        id={fieldId}
        type="checkbox"
        required={required}
        onChange={handleOnChange}
        className={`${className}`}
      />
    </div>
  );
};

export default Checkbox;
