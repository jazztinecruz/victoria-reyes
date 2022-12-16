import { ChangeEvent, useEffect, useId, useRef } from "react";

type Props = {
  type?: "text" | "email" | "password" | "date";
  label: string;
  name: string;
  value?: any;
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
  value,
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
      <label
        htmlFor={fieldId}
        className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
        {label}
      </label>
      <input
        id={fieldId}
        ref={ref}
        name={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={handleOnChange}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        className={`${
          valid ? "" : "border-red-600"
        } ${className} focus:ring-opacity-40" mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-brand/75 focus:outline-none focus:ring focus:ring-brand/75  dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600`}
      />
    </div>
  );
};

export default Textbox;
