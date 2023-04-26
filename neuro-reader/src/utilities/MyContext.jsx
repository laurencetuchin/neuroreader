import React from "react";
import { createContext, useContext, useState, useReducer } from "react";

const SET_TEXT_SIZE = 'SET_TEXT_SIZE';
const SET_TEXT_COLOR = 'SET_TEXT_COLOR';

const TextContext = createContext();

const initialState = {
    textSize: 'text-xl',
    textColor: 'text-pink-900',
    textFont: 'font-sans'
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TEXT_SIZE:
            return {
                ...state,
                textSize: action.payload
            };
        case SET_TEXT_COLOR:
            return {
                ...state,
                textColor: action.payload
            };
        case SET_TEXT_FONT: 
            return {
                ...state,
                textFont: action.payload
            }
    
        default:
            return state;
    }
};

const TextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TextContext.Provider value={[state, dispatch]}>
            {children}
            <div className={`${state.textColor} ${state.textSize}`}>color</div>
        </TextContext.Provider>
    );
}

// export default function MyContext() {
//     const [size, setSize] = useState('text-xl');

//   return (
//     <>
//         <TextSizeContext.Provider value={size}>
//             <button onClick={() => {
//                 setSize(size === 'text-xl' ? 'text-2xl' : 'text-xl');
//             }} className={size}>
//                 Toggle size - the size is {size}
//             </button>
//         </TextSizeContext.Provider>
    
//     </>
//     )
// }

export { TextContext, TextProvider, SET_TEXT_SIZE, SET_TEXT_COLOR};