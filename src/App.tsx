import { useState } from "react";
import { StepOne } from "./components/UserForm/StepOne";
import { StepTwo } from "./components/UserForm/StepTwo";

function App() {
  //state for steps
  const [step, setstep] = useState(1);

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  switch (step) {
    case 1:
      return (
        <StepOne nextStep={nextStep} />
      );
    case 2:
        return (
          <StepTwo prevStep={prevStep}/>
        );
    default:
      return (
        <></>
      )
  }

}

export default App;
