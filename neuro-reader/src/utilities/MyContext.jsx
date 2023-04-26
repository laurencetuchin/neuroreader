import React from "react";
import { createContext, useContext, useState } from "react";

const TextSizeContext = createContext('text-xl');


export default function MyContext() {
    const [size, setSize] = useState('text-xl');

  return (
    <>
        <TextSizeContext.Provider value={size}>
            <button onClick={() => {
                setSize(size === 'text-xl' ? 'text-2xl' : 'text-xl');
            }} className={size}>
                Toggle size - the size is {size}
            </button>
        </TextSizeContext.Provider>
    
    </>
    )
}
