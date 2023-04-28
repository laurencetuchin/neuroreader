import {  useContext, useState } from "react";
import React from 'react';
import { TextContext, SET_TEXT_SIZE } from "../utilities/MyContext";

// export const SizeContext = createContext('text-xl');

 export default function AdjustTextSize() {

  const [state, dispatch] = useContext(TextContext);
  const [selectedSize, setSelectedSize] = useState('text-lg');


  const handleTextSizeChange = (size) => {
    dispatch({ type: SET_TEXT_SIZE, payload: size });
    setSelectedSize(size);
  };

  const sizeOptions = [
    { fontSize: 'Small', sizeValue: 'text-sm'},
    { fontSize: 'Medium', sizeValue: 'text-md'},
    { fontSize: 'Large', sizeValue: 'text-lg'},
    { fontSize: 'XL', sizeValue: 'text-xl'},
    { fontSize: '2XL', sizeValue: 'text-2xl'},
    { fontSize: '3XL', sizeValue: 'text-3xl'},
    { fontSize: '4XL', sizeValue: 'text-4xl'},
    { fontSize: '5XL', sizeValue: 'text-5xl'}
  ]
  // checks state of button is selected - works after reset state
  const getButtonClass = (size) => {
    if (size.sizeValue === state.textSize){
      return 'border-2 border-slate-900';
    }
    return 'border border-gray-300';
  }
 


  return (
    <div>
      <p>Select text size:</p>
      {sizeOptions.map((size) => (
        <button
          key={size.sizeValue}
          className={`text-size-button border border-gray-300 rounded-md py-2 px-4 mt-2 mr-2 ${size.sizeValue} ${getButtonClass(size)}`}
          onClick={() => handleTextSizeChange(size.sizeValue)}
        >
          {size.fontSize}
        </button> 
      ))}
    </div>
  );
}


