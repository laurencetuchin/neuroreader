import React from "react";
import { createContext, useContext, useState, useReducer } from "react";

const SET_TEXT_SIZE = "SET_TEXT_SIZE";
const SET_TEXT_COLOR = "SET_TEXT_COLOR";
const SET_TEXT_FONT = "SET_TEXT_FONT";
const SET_FONT_WEIGHT = "SET_FONT_WEIGHT";
const SET_TEXT_ALIGNMENT = "SET_TEXT_ALIGNMENT";
const SET_RESET = "SET_RESET";

const TextContext = createContext();

const initialState = {
	textSize: "text-xl",
	textColor: "text-violet-400",
	textFont: "font-sans",
	textWeight: "font-normal",
	textAlignment: "text-justify",
};

const reducer = (state, action) => {
	switch (action.type) {
		case SET_TEXT_SIZE:
			return {
				...state,
				textSize: action.payload,
			};
		case SET_TEXT_COLOR:
			return {
				...state,
				textColor: action.payload,
			};
		case SET_TEXT_FONT:
			return {
				...state,
				textFont: action.payload,
			};
		case SET_FONT_WEIGHT:
			return {
				...state,
				textWeight: action.payload,
			};
		case SET_TEXT_ALIGNMENT:
			return {
				...state,
				textAlignment: action.payload,
			};
		case SET_RESET:
			return initialState;
		default:
			return state;
	}
};

const TextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	console.log("useContext used");
	return (
		<TextContext.Provider value={[state, dispatch]}>
			{children}
			{/* <div className={`${state.textColor} ${state.textSize} ${state.textFont} ${state.textWeight} ${state.textAlignment}`}></div> */}
		</TextContext.Provider>
	);
};

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

export {
	TextContext,
	TextProvider,
	SET_TEXT_SIZE,
	SET_TEXT_COLOR,
	SET_TEXT_FONT,
	SET_FONT_WEIGHT,
	SET_TEXT_ALIGNMENT,
	SET_RESET,
	initialState,
};
