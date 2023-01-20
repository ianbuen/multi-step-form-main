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
      <form>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>

        <div className="CardSelect">
          <div className="Card">
            <h3>Arcade</h3>
            <p>$9/mo</p>
          </div>

          <div className="Card">
            <h3>Advanced</h3>
            <p>$12/mo</p>
          </div>
          
          <div className="Card">
            <h3>Pro</h3>
            <p>$15/mo</p>
          </div>
        </div>

        Monthly
        Yearly
      </form>
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
