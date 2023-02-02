import { useEffect, useRef } from "react";
import { useStateValue } from "../StateProvider";
import "../styles/FormControls.css";

export const InputField = ({type, name, label, placeholder, onChange, value}) => {

    value = value ? value : '';

    return (
        <div className="input-wrapper">
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} placeholder={placeholder} onChange={onChange} value={value} required={true} />
            <span></span>
        </div>
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


export const PlanSelect = ({items, yearly}) => {

    const [{plan}, dispatch] = useStateValue();
    const { isYearly, addons, index : idPlan } = plan; 

    const refCardSelection = useRef(); 

    useEffect(() => {
        const {current: {children}} = refCardSelection;

        children[idPlan]?.classList.add("Selected");
    }, [idPlan]);

    
    const handleClick = (evt, index) => {
        const {currentTarget: selectedCard} = evt;
        const allCards = [...selectedCard.parentElement.children];

        allCards.forEach(card => card.classList.remove("Selected"))
        
        let updatedPlan = { isYearly, addons };
        
        if (index !== idPlan) {
            updatedPlan = { ...items[index], index: index, ...updatedPlan};
            delete updatedPlan.image;
            selectedCard.classList.add("Selected");
        } 

        dispatch({
            type: 'SET_PLAN',
            plan: updatedPlan,
        });
    };


    return (
        <div className="CardSelection" ref={refCardSelection}>
          {items?.map((item, index) => (
            <PlanCard key={`card-${index}`} image={item.image} name={item.name} price={item.price} yearly={yearly} onClick={(evt) => {handleClick(evt, index)}} />
          ))}
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


export const AddOnsSelect = ({items, yearly}) => {

    const [{plan}, dispatch] = useStateValue(); 
    const { addons } = plan;

    const refCardSelection = useRef();

    useEffect(() => {
        const {current: {children: cards}} = refCardSelection;

        addons.forEach(addon => {
            // const children = addon.children;
            const checkbox = cards[addon.index]?.children[0];

            checkbox.checked = true;
        });

    }, [addons]);


    const handleChange = (index) => {
        let updatedAddons = [...addons]; // make a copy of existing addons

        const found = addons.find(addon => addon.index === index);

        if (found) // if select addon is reselected, remove
            updatedAddons.splice(addons.indexOf(found), 1);
        else // else add new to array
            updatedAddons.push({...items[index], index: index})

        // sort addons by index
        updatedAddons.sort((a, b) => a.index > b.index);

        dispatch({
            type: "SET_PLAN",
            plan: {...plan, addons: updatedAddons}
        });
    };

    return (
        <div className="CardSelection Addons" ref={refCardSelection}>
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

export const Preview = () => {

    const [{plan: {name, isYearly, price, addons}}, dispatch] = useStateValue();

    const getTotal = () => {
        const addonsTotal = addons.reduce((total, addon) => total + addon.price, 0);
        const basePlan = price * 1;

        return (basePlan + addonsTotal) * (isYearly ? 10 : 1);
    }

    const handleClick = (e) => {

        e.preventDefault();

        dispatch({
            type: "SET_STEP",
            step: 2,
        });

    }

    return (
        <div className="Preview">
          <div className="PreviewPlan">
            <h4>{name ? `${name} ${isYearly ? '(Yearly)' : '(Monthly)'}` : ''}</h4>
            <button onClick={handleClick} >Change</button>
            <h4>{isYearly ? `$${price * 10 || 0}/yr` : `$${price || 0}/mo`}</h4>
          </div>

          <div className="PreviewAddons">
            {addons.map((addon, i) => <div key={'addon-'+i}>
                <p>{addon.name}</p>
                <p>{isYearly ? `+$${addon.price * 10}/yr` : `+$${addon.price}/mo`}</p>
            </div>)}
          </div>

          <div className="PreviewTotal">
            <p>Total {isYearly ? '(per year)' : '(per month)'}</p>
            <h3>{`+$${getTotal() || 0}/${isYearly ? 'yr' : 'mo' }`}</h3>
          </div>
        </div>
    );
};