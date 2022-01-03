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
  size?: "normal" | "small" | "large" | "medium" | "short";
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
          {/* <InputSimple name="No. int" size="short" type="text" />
        <InputSimple name="código postal" size="short" type="text" />
        <InputSimple name="colonia o urbanización" size="normal" type="text" />
        <InputSimple name="ciudad o poblacion" size="small" type="text" />
        <InputSimple name="entidad federativa" size="normal" type="text" />
        <InputSimple name="país" size="normal" type="text" /> */}

  return (
    <>
      {/* <section className="py-1">
        <div className="w-full lg:w-10/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white/90 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blue-900 text-xl font-bold">
                  Registro de Usuario
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
