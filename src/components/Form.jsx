import "../styles/Form.css";
import { BackLink, NextButton } from "./FormControls";
import { FormGroup } from "./FormGroup";

export const Form = ({state}) => {

  return (
    <div className="Form">
      <FormGroup state={state} />

      <div className="ButtonWrapper">
        <BackLink text="Go Back" state={state} />
        <NextButton text="Next Step" state={state} />
      </div>
    </div>
  );
};
