import "../styles/FormGroup.css";
import { PlanSelect, InputField, ToggleSwitch, AddOnsSelect } from "./FormControls";

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
  const [checked, setChecked] = useState(false);

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

        <PlanSelect items={plans} yearly={checked} />

        <ToggleSwitch toggleState={{ 'checked': checked , 'setChecked': setChecked }} >
          <p>Monthly</p>
          <p>Yearly</p>
        </ToggleSwitch>
      </form>
    </div>
  );
};

const AddOns = () => {

  const addOns = [
    {
      name: 'Online service',
      desc: 'Access to multiplayer games',
      price: 1,
    },
    {
      name: 'Larger storage',
      desc: 'Extra 1TB of cloud save',
      price: 2,
    },
    {
      name: 'Customizable Profile',
      desc: 'Custom theme on your profile',
      price: 2,
    },
  ];

  return (
    <div className="AddOns">
      <form>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>

        <AddOnsSelect items={addOns} yearly={false} />
      </form>
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
