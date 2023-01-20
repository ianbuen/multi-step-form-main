import "../styles/FormGroup.css";
import { InputField } from "./FormControls";

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

const SelectPlan = () => {
  return (
    <div className="SelectPlan">
      <h1>Step 2</h1>
    </div>
  );
};

const AddOns = () => {
  return (
    <div className="AddOns">
      <h1>Step 3</h1>
    </div>
  );
};

const Summary = () => {
  return (
    <div className="Summary">
      <h1>Step 4</h1>
    </div>
  );
};

const GetStep = (step) => {

  switch (step) {
    case 2: return <SelectPlan />; 
    case 3: return <AddOns />; 
    case 4: return <Summary />; 
    default: return <PersonalInfo />;
  }
}

export const FormGroup = ({state: {step}}) => {
  return (
    <div className="FormGroup">
      
      {GetStep(step)}
      
    </div>
  );
};
