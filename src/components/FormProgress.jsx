import { useStateValue } from "../StateProvider";
import "../styles/FormProgress.css";

const FormStep = ({ value, text, isActive }) => {

  const [{step}] = useStateValue();

  return (
    <div className={'FormStep'}>
      <h4 className={isActive || (value === 4 && step > 3) ? "Active" : ""}>{value}</h4>
      <h5>{text}</h5>
      <h6>Step {value}</h6>
    </div>
  );
}; 

export const FormProgress = () => {

  const [{step}] = useStateValue();

  const steps = ["Your info", "Select plan", "Add-ons", "Summary"];

  return (
    <div className="FormProgress">
      {steps?.map((item, index) => (
        <FormStep key={index} isActive={step === index + 1} value={index + 1} text={item} />
      ))}
    </div>
  );
};
