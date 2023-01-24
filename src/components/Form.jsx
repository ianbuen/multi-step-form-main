import { useStateValue } from "../StateProvider";
import "../styles/Form.css";
import { BackLink, NextButton } from "./FormControls";
import { FormGroup } from "./FormGroup";

export const Form = () => {

  const [{step}, dispatch] = useStateValue();

  const nextStep = () => {
    dispatch({
      type: "SET_STEP",
      step: step <= 3 ? step + 1 : step,
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
      <FormGroup />

      <div className="ButtonWrapper">
        <BackLink text="Go Back" onClick={previousStep} />
        <NextButton text="Next Step" onClick={nextStep} />
      </div>
    </div>
  );
};
