import { Children } from "react";
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


export const PlanCard = ({image, plan, price, yearly}) => {
    return (
        <div className="Card">
            <img src={image.url} alt={image.alt} />
            <div className="CardDetails">
                <h4>{plan}</h4>
                <p>{price}</p>
                {yearly && <h5>2 months free</h5>}
            </div>
        </div>
    );
};

export const AddOnCard = ({addon, desc, price, yearly}) => {

    return (
        <div className="AddOn">
            <input type="checkbox" className="AddOnTick" />
            <h4 className="AddOnName">{addon}</h4>
            <p className="AddOnDesc">{desc}</p>
            <p className="AddOnPrice">{ yearly ? `+$${price * 10}/yr` : `+$${price}/mo` }</p>
        </div>
    );
};


export const PlanSelect = ({items, yearly}) => {

    return (
        <div className="CardSelect">
          {items?.map((item, index) => (
            <PlanCard key={`card-${index}`} image={item.image} plan={item.plan} price={item.price} yearly={yearly} />
          ))}
        </div>
    );
};

export const AddOnsSelect = ({items, yearly}) => {
    return (
        <div className="CardSelect">
            {items?.map((item, index) => (
            <AddOnCard key={`card-${index}`} addon={item.name} desc={item.desc} price={item.price} yearly={yearly} />
          ))}
        </div>
    );
};

export const ToggleSwitch = ({toggleState: { checked, setChecked }, children}) => {

    const setToggleState = () => {
        setChecked(!checked);
    }

    return (
        <div className="ToggleSwitch">
            <input type="checkbox" className="Switch" checked={checked} onChange={setToggleState} />
            {children}
        </div>
    );
};