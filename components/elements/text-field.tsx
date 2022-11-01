import { ChangeEvent, useEffect, useId, useRef } from "react";

type Props = {
  type?: "text" | "email" | "password" | "date";
  label: string;
  name: string;
  placeholder?: string;
  valid?: boolean;
  focus?: boolean;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  onChange: React.Dispatch<React.SetStateAction<any>>;
  className?: string;
};

const TextField = ({
  type = "text",
  label,
  name,
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
        placeholder={placeholder}
        onChange={handleOnChange}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        className={`${valid ? "X" : "Y"} ${className}`}
      />
    </div>
  );
};

export default TextField;
