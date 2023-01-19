import { useState } from "react";
import "../styles/Form.css";
import { SubmitButton } from "./FormControls";
import { FormGroup } from "./FormGroup";

export const Form = () => {
  const [formStep, setFormStep] = useState(0);

  return (
    <div className="Form">
      <FormGroup step={formStep} />

      <div className="ButtonWrapper">
        <SubmitButton text="Next Step" />
      </div>
    </div>
  );
};
