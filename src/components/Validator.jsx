
const getInputElements = ({current: root}) => {

    const formgroup = root.children[0];

    // I went w/ ugly drilling, I was thinking of forwardRef but yet to study more on that
    const elements = [...formgroup.children[0].children[0].children]; 

    // make an array of input elements only
    let inputs = [];

    elements.map(element => {
        if (element.nodeName === "DIV") {
            inputs = [...inputs, element.children[1]];
        }

        return null;
    });

    return inputs;
}; 


const highlight = (input, boolHighlight) => {

    if (!boolHighlight) {
        input.classList.remove("input-invalid");
        setTimeout(() => {input.classList.add("input-invalid")}, 100);
    } else
        input.classList.remove("input-invalid");

}


export const validator = (form) => {

    const inputs = getInputElements(form);
    let truthArr = [];

    const regex = { 
        text: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
        email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        tel: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/,
    }

    inputs.forEach((input, index) => {

        const {value, type} = input;

        truthArr[index] = value.length !== 0 && regex[type].test(value);
        
        highlight(input, truthArr[index]);
    });

    return truthArr.reduce((prev, curr) => prev && curr);
};

export default validator;