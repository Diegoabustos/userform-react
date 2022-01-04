import { useState, useEffect } from "react";
import { InputSimple } from "./InputSimple";

interface MultiInputAddressProperties {
  data: Array<StepProperties>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage?: any;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  // setData: (data: Array<StepProperties>) => void;
}

interface StepProperties {
  error?: string;
  name?: string;
  label?: string;
  size?: "normal" | "small" | "large" | "medium";
  placeholder?: string;
  type?: string;
  value?: string;
}

export const MultiInputAddress: React.FC<MultiInputAddressProperties> = ({
  data,
  // setData,
}: MultiInputAddressProperties): JSX.Element => {
  const [inputList, setInputList] = useState<Array<StepProperties>>(data);
  console.log(inputList)

  useEffect(() => {
    setInputList(data);
  }, [data]);

  const handleOnchangeValue = (
    target: { value: string; name?: string },
    index: number
  ) => {
    const { name, value } = target;
    const list: Array<StepProperties> = [...inputList];

    list[index] = { value, name, placeholder: data[index].placeholder };
    setInputList(list);
    // setData(list);
  };

  const StepComponent = inputList?.map((step, index) => {
    console.log(step.value)
    console.log(`input_${index}`)
    return (

        <InputSimple 
        errorMessage={step.error}
        label={step.label}
          name={step.name} 
          placeholder={step.placeholder} 
          size={step.size} 
          type="text" 
          value={step.value} 
          onChange={(event) => {
            const target = {
              value: event.target.value,
              name: event.target.name,
            };
            handleOnchangeValue(target, index);
          }}
          />

    );
  });

  return <> {StepComponent} </>

};
