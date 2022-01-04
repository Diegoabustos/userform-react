interface ButtonProperties {
  primary: string;
  type?: 'submit';
  onClick?(event?: React.MouseEvent<HTMLButtonElement>): void;
  position?: "start" | "end";
}

export const Button: React.FC<ButtonProperties> = ({
  primary,
  onClick,
  type,
  position,
}: ButtonProperties): JSX.Element => {
  const BUTTON_POSITION = {
    start: "w-full lg:w-6/12 px-4 flex pt-5 justify-start",
    end: "w-full lg:w-6/12 px-4 flex pt-5 justify-end",
  };
  return (
    <div className={`${BUTTON_POSITION[position!]}`}>
      <button type={type} onClick={onClick} className="bg-blue-800 hover:bg-blue-900 text-white w-72 h-10 font-bold py-2 px-4 rounded-md">
        {primary}
      </button>
    </div>
  );
};
