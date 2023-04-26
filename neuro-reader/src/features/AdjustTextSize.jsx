import {  useContext } from "react";
import React from 'react';
import { TextContext, SET_TEXT_SIZE } from "../utilities/MyContext";

// export const SizeContext = createContext('text-xl');

 export default function AdjustTextSize() {

  const [state, dispatch] = useContext(TextContext);

  const handleTextSizeChange = (size) => {
    dispatch({ type: SET_TEXT_SIZE, payload: size });
  };

 


  return (
    <div>
      <p>Select text size:</p>
      <button onClick={() => handleTextSizeChange('text-sm')} className="text-sm px-2 py-1 m-1 rounded bg-gray-200 hover:bg-gray-300">Small</button>
      <button onClick={() => handleTextSizeChange('text-lg')} className="text-lg px-2 py-1 m-1 rounded bg-gray-200 hover:bg-gray-300">Large</button>
      <button onClick={() => handleTextSizeChange('text-xl')} className="text-xl px-2 py-1 m-1 rounded bg-gray-200 hover:bg-gray-300">Extra Large</button>
    </div>
  );
}


