import React from 'react'
import { useState } from 'react'

export default function NeuroReader() {

    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }


    
  return (

    <div className="flex flex-col">
      <label className="mb-2 font-bold text-lg" htmlFor="input-text">
        Enter your text:
      </label>
      <div className="flex">
        <span className="font-bold">
          {inputValue.slice(0, 3)}
        </span>
        {inputValue.slice(3)}
      </div>
      <input
        className="border border-gray-300 rounded-md py-2 px-4 mt-2"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        id="input-text"
      />
    </div>
  );
  
}
