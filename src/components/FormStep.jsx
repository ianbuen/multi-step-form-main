import "../styles/FormStep.css";

const PersonalInfo = () => {
  return (
    <div className="PersonalInfo">
      <form>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>

        <label for="name">Name</label>
        <input type="text" name="name" placeholder="e.g. Stephen King" />
        
        <label for="email">Email Address</label>
        <input type="email" name="email" placeholder="e.g. stephenking@lorem.com" />

        <label for="telephone">Phone Number</label>
        <input type="tel" name="telephone" placeholder="e.g. +1 234 567 890" />

        <input type="submit" value="Next Step" />
      </form>
    </div>
  );
};

const SelectPlan = () => {};

const AddOns = () => {};

const Summary = () => {};

export const FormStep = ({ step }) => {
  return (
    <div className="FormStep">
      <PersonalInfo />
    </div>
  );
};
