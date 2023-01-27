import "../styles/FormGroup.css";
import { PlanSelect, InputField, ToggleSwitch, AddOnsSelect, Preview } from "./FormControls";

import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import thank from "../assets/images/icon-thank-you.svg";

import { useStateValue } from "../StateProvider";

const PersonalInfo = ({children}) => {

  const [{ info }, dispatch] = useStateValue();

  const handleChange = ({target: {name, value}}) => {
 
      let newInfo = {...info};
      newInfo[name] = value;

      dispatch({
        type: "SET_INFO",
        info: newInfo,
      });
  };

  return (
    <div className="PersonalInfo">
      <form>
        <h2>Personal Info</h2>
        <p>Please provide your name, email address, and phone number.</p>

        <InputField type="text" name="name" label="Name" placeholder="e.g. Stephen King" value={info.name} onChange={handleChange} />
        <InputField type="email" name="email" label="Email Address" placeholder="e.g. stephenking@lorem.com" value={info.email} onChange={handleChange} />
        <InputField type="tel" name="telephone" label="Phone Number" placeholder="e.g. +1 234 567 890" value={info.telephone} onChange={handleChange} /> 
      </form>
    </div>
  );
};

const SelectPlan = () => {

  const [{plan}, dispatch] = useStateValue();
  const { isYearly } = plan;

  const plans = [
    {
      image: { url: arcade, alt: "arcade icon" },
      name: 'Arcade',
      price: '9'
    },

    {
      image: { url: advanced, alt: "advanced icon" },
      name: 'Advanced',
      price: '12'
    },

    {
      image: { url: pro, alt: "pro icon" },
      name: 'Pro',
      price: '15'
    }
  ]

  const setToggle = () => {
      dispatch({
        type: "SET_PLAN",
        plan: {...plan, isYearly: !isYearly}
      });
  };

  return (
    <div className="SelectPlan">
      <form>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>

        <PlanSelect items={plans} yearly={isYearly} />

        <ToggleSwitch checked={isYearly} onChange={setToggle} >
          <p>Monthly</p>
          <p>Yearly</p>
        </ToggleSwitch>
      </form> 
    </div>
  );
};

const AddOns = () => {

  const [{plan: {isYearly}}] = useStateValue();

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

        <AddOnsSelect items={addOns} yearly={isYearly} />
      </form>
    </div>
  );
};

const Summary = () => {

  return (
    <div className="Summary">
      <form>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>

        <Preview />
      </form>
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

export const FormGroup = () => {

  const [{step}] = useStateValue();

  return (
    <div className="FormGroup">
      
      {GetStep(step)}
      
    </div>
  );
};

export const Confirmation = () => {

  return (
    <div className="Confirmation">
        <img src={thank} alt="'thank you' icon" />

        <h2>Thank you!</h2>

        <p>Thanks for confirming your subscription! We hope you have fun 
        using our platform. If you ever need support, please feel free 
        to email us at support@loremgaming.com.</p>
    </div>
  );
}