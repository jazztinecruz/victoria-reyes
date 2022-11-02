import { ChangeEvent, useEffect, useId, useRef } from "react";

type Props = {
  type?: "text" | "email" | "password" | "date";
  label: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  valid?: boolean;
  focus?: boolean;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  onChange: React.Dispatch<React.SetStateAction<any>>;
  className?: string;
};

const Textbox = ({
  type = "text",
  label,
  name,
  defaultValue,
  placeholder,
  valid = true,
  focus,
  required,
  readOnly,
  disabled,
  onChange,
  className,
}: Props) => {
  const fieldId = `${name}${useId()}`;
  const ref = useRef<any>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange((state: any) => ({ ...state, [name]: event.target.value }));
  };

  useEffect(() => {
    const handleFocus = () => {
      focus && ref.current.focus();
    };
    handleFocus();
  }, [focus]);

  return (
    <div>
      <label htmlFor={fieldId}>{label}</label>
      <input
        id={fieldId}
        ref={ref}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={handleOnChange}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        className={`${valid ? "" : "border-red-600"} ${className} border`}
      />
    </div>
  );
};

export default Textbox;
