import { useStateValue } from "../StateProvider";
import "../styles/Form.css";
import { BackLink, NextButton } from "./FormControls";
import { FormGroup, Confirmation } from "./FormGroup";

export const Form = () => {

  const [{step}, dispatch] = useStateValue();

  const nextStep = () => {
    dispatch({
      type: "SET_STEP",
      step: step <= 4 ? step + 1 : step,
    });
  }

  const previousStep = () => {
    dispatch({
      type: "SET_STEP",
      step: step > 1 ? step - 1 : step,
    });
  }

  return (
    <div className="Form">
      {step === 5 ? <Confirmation /> : <FormGroup /> }

      {step < 5 && <div className="ButtonWrapper">
        <BackLink text="Go Back" onClick={previousStep} />
        <NextButton text="Next Step" onClick={nextStep} />
      </div>}
    </div>
  );
};
