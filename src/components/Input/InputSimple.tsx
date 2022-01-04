interface InputSimpleProperties {
  errorMessage?: any;
  name?: string;
  label?: string;
  size?: "normal" | "small" | "large" | "medium" ;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  value?: string;
}

export const InputSimple: React.FC<InputSimpleProperties> = ({
  errorMessage,
  name,
  label,
  size,
  onChange,
  onBlur,
  placeholder,
  type,
  value,
}: InputSimpleProperties): JSX.Element => {
  const INPUT_WIDTH = {
    // small: "w-full lg:w-2/12 md:w-4/12 px-4",
    small: "w-full lg:w-4/12 md:w-6/12 px-4",
    normal: "w-full lg:w-6/12 px-4",
    medium: "w-full lg:w-8/12 px-4",
    large: "w-full lg:w-12/12 px-4",
  };

  return (
    <div className={`${INPUT_WIDTH[size!]}`}>
      <div className="relative w-full mb-3">
        <label className="block uppercase text-blue-900 text-xs font-bold mb-2">
          {label}
        </label>
        <input
          name={name}
          type={type}
          className="border-2 px-3 py-3 border-gray-300 placeholder-blue-900 text-blue-900 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          value={value}
        />
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1" >{errorMessage}</span>
      </div>
    </div>
  );
};
