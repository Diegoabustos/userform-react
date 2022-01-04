interface InputDocProperties {
  errorMessage?: any;
  name?: string;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  value?: string;
}

export const InputUpDoc: React.FC<InputDocProperties> = ({
  errorMessage,
  name,
  label,
  onChange,
  placeholder,
  type,
  value,
}: InputDocProperties): JSX.Element => {
  return (
    <div className="w-full lg:w-6/12 px-4">
      <label
        className="block uppercase text-blue-900 text-xs font-bold mb-2"
      >
        {label}
      </label>
      <div className="mb-3 mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-black border-dashed rounded-md ">
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 w-12 text-black"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 99.09 122.88"
            aria-hidden="true"
          >
            <path
              d="M64.64,13,86.77,36.21H64.64V13ZM42.58,71.67a3.25,3.25,0,0,1-4.92-4.25l9.42-10.91a3.26,3.26,0,0,1,4.59-.33,5.14,5.14,0,0,1,.4.41l9.3,10.28a3.24,3.24,0,0,1-4.81,4.35L52.8,67.07V82.52a3.26,3.26,0,1,1-6.52,0V67.38l-3.7,4.29ZM24.22,85.42a3.26,3.26,0,1,1,6.52,0v7.46H68.36V85.42a3.26,3.26,0,1,1,6.51,0V96.14a3.26,3.26,0,0,1-3.26,3.26H27.48a3.26,3.26,0,0,1-3.26-3.26V85.42ZM99.08,39.19c.15-.57-1.18-2.07-2.68-3.56L63.8,1.36A3.63,3.63,0,0,0,61,0H6.62A6.62,6.62,0,0,0,0,6.62V116.26a6.62,6.62,0,0,0,6.62,6.62H92.46a6.62,6.62,0,0,0,6.62-6.62V39.19Zm-7.4,4.42v71.87H7.4V7.37H57.25V39.9A3.71,3.71,0,0,0,61,43.61Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="flex text-sm text-black">
            <label
              className="relative cursor-pointer rounded-md font-medium text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <span className="">{placeholder}</span>
              <input
                onChange={onChange}
                name={name}
                value={value}
                type={type}
                className="sr-only"
              />

            </label>
            
          </div>
        </div>
      </div>
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1" >{errorMessage}</span>
    </div>
  );
};
