import { useRef } from "react";
import { useStateValue } from "../StateProvider";
import "../styles/Form.css";
import { BackLink, NextButton } from "./FormControls";
import { FormGroup, Confirmation } from "./FormGroup";
import formValid from "./Validator";

export const Form = () => {

  const [{step}, dispatch] = useStateValue();
  const form = useRef(null);

  const nextStep = () => {

    let next = step;

    if (step <= 4) {
        next = step + 1;
        
        if (step === 1 && !formValid(form))
            next = 1;
    } else
        next = step;

    dispatch({
      type: "SET_STEP",
      step: next,
    });
  }

  const previousStep = () => {
    dispatch({
      type: "SET_STEP",
      step: step > 1 ? step - 1 : step,
    });
  }

  return (
    <><h1>.</h1>
    <div className="Form" ref={form}>
      {step === 5 ? <Confirmation /> : <FormGroup /> }

      {step < 5 && <div className="ButtonWrapper">
        <BackLink text="Go Back" onClick={previousStep} />
        <NextButton text="Next Step" onClick={nextStep} />
      </div>}
    </div>
    </>
  );
};
