import "../styles/FormControls.css";

export const InputField = ({type, name, label, placeholder}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} placeholder={placeholder} />
        </>
    );
};

export const NextButton = ({ text, state }) => {

    const goNext = () => {

        let {step, setStep} = state;
        
        setStep(step <= 3 ? step + 1 : step);
    }

    return (
        <>
            <input className="NextButton" type="submit" value={text} onClick={goNext}/>
        </>
    );
};

export const BackLink = ({ text, state }) => {

    const goBack = () => {

        let {step, setStep} = state;
        
        setStep(step > 1 ? step - 1 : step);
    }

    return (
        <>
            {state?.step > 1 ? <h3 className="BackLink" onClick={goBack}>{text}</h3> : <></>}
        </>
    );
};


export const CardSelect = () => {

    return (
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
    );
};