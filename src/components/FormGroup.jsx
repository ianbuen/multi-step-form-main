import "../styles/FormGroup.css";
import { InputField, SubmitButton } from "./FormControls";

const PersonalInfo = () => {
  return (
    <div className="PersonalInfo">
      <form>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>

        <InputField type="text" name="name" label="Name" placeholder="e.g. Stephen King" />
        <InputField type="email" name="email" label="Email Address" placeholder="e.g. stephenking@lorem.com" />
        <InputField type="tel" name="telephone" label="Phone Number" placeholder="e.g. +1 234 567 890" /> 

      </form>
    </div>
  );
};

const SelectPlan = () => {};

const AddOns = () => {};

const Summary = () => {};

export const FormGroup = ({ step }) => {
  return (
    <div className="FormGroup">
      <PersonalInfo />
    </div>
  );
};
