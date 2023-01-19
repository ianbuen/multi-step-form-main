import "../styles/FormControls.css";

export const InputField = ({type, name, label, placeholder}) => {
    return (
        <>
            <label for={name}>{label}</label>
            <input type={type} name={name} placeholder={placeholder} />
        </>
    );
};

export const SubmitButton = ({text}) => {
    return (
        <>
            <input className="SubmitButton" type="submit" value={text} />
        </>
    );
};