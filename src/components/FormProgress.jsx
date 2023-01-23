import "../styles/FormProgress.css";

const FormStep = ({ value, text, isActive }) => {

  return (
    <div className={'FormStep'}>
      <h4 className={isActive ? "Active" : ""}>{value}</h4>
      <h6>Step {value}</h6>
      <h5>{text}</h5>
    </div>
  );
}; 

export const FormProgress = ({ state: { step } }) => {
  const steps = ["Your info", "Select plan", "Add-ons", "Summary"];

  return (
    <div className="FormProgress">
      {steps?.map((item, index) => (
        <FormStep key={index} isActive={step === index + 1} value={index + 1} text={item} />
      ))}
    </div>
  );
};