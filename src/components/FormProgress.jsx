import "../styles/FormProgress.css";

const FormStep = ({ value, text }) => {
    return (
      <div className="FormStep">
        <h4>{value}</h4>
        <h6>Step {value}</h6>
        <h5>{text}</h5>
      </div>  
    );
};

export const FormProgress = () => {
    return (
        <div className="FormProgress">
            <FormStep value={1} text="Your info" />
            <FormStep value={2} text="Select plan" />
            <FormStep value={3} text="Add-ons" />
            <FormStep value={4} text="Summary" />
        </div>
    );
};