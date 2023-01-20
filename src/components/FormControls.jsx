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


export const Card = ({image, plan, price}) => {
    return (
        <div className="Card">
            <img src={image.url} alt={image.alt} />
            <div className="CardDetails">
                <h4>{plan}</h4>
                <p>{price}</p>
            </div>
        </div>
    );
};


export const CardSelect = ({items}) => {

    return (
        <div className="CardSelect">
          {items?.map((item) => (
            <Card image={item.image} plan={item.plan} price={item.price} />
          ))}
        </div>
    );
};