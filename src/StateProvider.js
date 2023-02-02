import React, { createContext, useContext, useReducer } from 'react';

// Prepares the data layer
export const StateContext = createContext();

// State
export const initialState = {
    step: 1,
    info: {
        "email": "ian@mail.com",
        "telephone": "69420"
    },
    plan: {
        name: "Arcade",
        price: "9",
        index: 0,
        isYearly: false,
        addons: [],
    },

    // "step": 1,
    // "info": {
    //     "name": "Ian",
    //     "email": "ian@mail.com",
    //     "telephone": "69420"
    // },
    // plan: {
    //     isYearly: false,
    //     addons: [],
    // },
};

// Wrap the app and provide the data layer
export const StateProvider = ({children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Reducer
const reducer = (state, action) => { 
     
    switch(action.type) {
        case "SET_STEP": 
            return {...state, step: action.step};
        case "SET_INFO":
            return {...state, info: action.info};
        case "SET_PLAN":
            return {...state, plan: action.plan};

        default:
            return state;
    }
};

// Pull information from data layer
export const useStateValue = () => useContext(StateContext);


