import { Children } from "react";
import { useStateValue } from "../StateProvider";
import "../styles/FormControls.css";

export const InputField = ({type, name, label, placeholder, onChange}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} placeholder={placeholder} onChange={onChange} />
        </>
    );
};

export const NextButton = ({ text, onClick }) => {

    // const goNext = () => {

    //     let {step, setStep} = state;
        
    //     setStep(step <= 3 ? step + 1 : step);
    // }

    return (
        <>
            {/* <input className="NextButton" type="submit" value={text} onClick={goNext}/> */}
            <input className="NextButton" type="submit" value={text} onClick={onClick} />
        </>
    );
};

export const BackLink = ({ text, onClick }) => { 

    const [{step}] = useStateValue();

    return (
        <>
            {step > 1 ? <h3 className="BackLink" onClick={onClick}>{text}</h3> : <></>}
        </>
    );
};


export const PlanCard = ({image, plan, price, yearly, onClick}) => {
    return (
        <div className="Card" onClick={onClick}>
            <img src={image.url} alt={image.alt} />
            <div className="CardDetails">
                <h4>{plan}</h4>
                <p>{`$${price}/mo`}</p>
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

    const [{plan}, dispatch] = useStateValue();

    const selectPlan = (index) => {
        dispatch({
            type: 'SET_PLAN',
            plan: {...plan, type: items[index]}
        });

        console.log(plan);
    };

    return (
        <div className="CardSelect">
          {items?.map((item, index) => (
            <PlanCard key={`card-${index}`} image={item.image} plan={item.plan} price={item.price} yearly={yearly} onClick={() => selectPlan(index)} />
          ))}
        </div>
    );
};

export const AddOnsSelect = ({items, yearly}) => {

    const [{plan}, dispatch] = useStateValue(); 

    return (
        <div className="CardSelect">
            {items?.map((item, index) => (
            <AddOnCard key={`card-${index}`} addon={item.name} desc={item.desc} price={item.price} yearly={yearly} />
          ))}
        </div>
    );
};

export const ToggleSwitch = ({checked, onChange, children}) => { 

    return (
        <div className="ToggleSwitch">
            <input type="checkbox" className="Switch" checked={checked} onChange={onChange} />
            {children}
        </div>
    );
};