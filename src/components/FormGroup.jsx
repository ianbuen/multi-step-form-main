import "../styles/FormGroup.css";
import { CardSelect, InputField } from "./FormControls";

import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { useState } from "react";

const PersonalInfo = () => {
  return (
    <div className="PersonalInfo">
      <form>
        <h2>Personal Info</h2>
        <p>Please provide your name, email address, and phone number.</p>

        <InputField type="text" name="name" label="Name" placeholder="e.g. Stephen King" />
        <InputField type="email" name="email" label="Email Address" placeholder="e.g. stephenking@lorem.com" />
        <InputField type="tel" name="telephone" label="Phone Number" placeholder="e.g. +1 234 567 890" /> 
      </form>
    </div>
  );
};

const SelectPlan = () => {

  const [selectedPlan, setSelectedPlan] = useState(1);

  const plans = [
    {
      image: { url: arcade, alt: "arcade icon" },
      plan: 'Arcade',
      price: '$9/mo'
    },

    {
      image: { url: advanced, alt: "advanced icon" },
      plan: 'Advanced',
      price: '$12/mo'
    },

    {
      image: { url: pro, alt: "pro icon" },
      plan: 'Pro',
      price: '$15/mo'
    }
  ]

  return (
    <div className="SelectPlan">
      <form>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>

        <CardSelect items={plans} />

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
