import { useEffect } from "react";
import { useStateValue } from "../StateProvider";
import "../styles/FormControls.css";

export const InputField = ({type, name, label, placeholder, onChange, value}) => {

    value = value ? value : '';

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} />
        </>
    );
};

export const NextButton = ({ text, onClick }) => { 

    return (
        <>
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


export const PlanCard = ({image, name, price, yearly, onClick}) => {
    return (
        <div className="Card" onClick={onClick}>
            <img src={image.url} alt={image.alt} />
            <div className="CardDetails">
                <h4>{name}</h4>
                <p>{`$${price}/mo`}</p>
                {yearly && <h5>2 months free</h5>}
            </div>
        </div>
    );
};

export const AddOnCard = ({addon, desc, price, yearly, onChange}) => {

    return (
        <div className="AddOn">
            <input type="checkbox" className="AddOnTick" onChange={onChange} />
            <h4 className="AddOnName">{addon}</h4>
            <p className="AddOnDesc">{desc}</p>
            <p className="AddOnPrice">{ yearly ? `+$${price * 10}/yr` : `+$${price}/mo` }</p>
        </div>
    );
};


export const PlanSelect = ({items, yearly}) => {

    const [{plan}, dispatch] = useStateValue();
    const { isYearly, addons, index : idPlan } = plan; 


    useEffect(() => {
        
    }, []);


    const handleClick = (evt, index) => {
        const {currentTarget: selectedCard} = evt;
        const allCards = [...selectedCard.parentElement.children];

        allCards.forEach(card => card.classList.remove("Selected"))
        
        let updatedPlan = { isYearly, addons };
        
        if (index !== idPlan) {
            updatedPlan = { ...items[index], index: index, ...updatedPlan};
            selectedCard.classList.toggle("Selected");
        } 

        dispatch({
            type: 'SET_PLAN',
            plan: updatedPlan,
        });
    };


    return (
        <div className="CardSelection">
          {items?.map((item, index) => (
            <PlanCard key={`card-${index}`} image={item.image} name={item.name} price={item.price} yearly={yearly} onClick={(evt) => {handleClick(evt, index)}} />
          ))}
        </div>
    );
};

export const AddOnsSelect = ({items, yearly}) => {

    const [{plan}, dispatch] = useStateValue(); 
    const { addons } = plan;

    const handleChange = (index) => {
        
        let updatedAddons = [...addons]; // make a copy of existing addons

        addons.forEach(addon => {
            if (addon.index === index) { // if select addon is reselected, remove
                updatedAddons.splice(addon.index, 1);
            }
        });

        dispatch({
            type: "SET_PLAN",
            // plan: {...plan, addons: [...addons, updatedAddons ] }
            plan: {...plan, addons: [...addons, updatedAddons ]}
        });
    };

    return (
        <div className="CardSelection">
            {items?.map((item, index) => (
            <AddOnCard key={`card-${index}`} addon={item.name} desc={item.desc} price={item.price} yearly={yearly} onChange={() => {handleChange(index)}} />
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