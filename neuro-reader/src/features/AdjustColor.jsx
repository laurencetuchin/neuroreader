import React from 'react'
import { useState } from 'react'


export default function AdjustColor({ magicColor }) {

    const [selectedColor, setSelectedColor] = useState(magicColor);

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const setColor = 'text-red-500';


  return (

    <div className="">
        <p>Select your color: ${magicColor} </p>
      <button
        className={`mr-2 h-6 w-6 rounded-full bg-pink-500 ${selectedColor === 'text-pink-500' ? 'bg-pink-500' : ''}`}
        onClick={() => handleColorChange('text-pink-500')}
      ></button>
      <button
        className={`mx-2 h-6 w-6 rounded-full bg-stone-600 ${selectedColor === 'text-stone-600' ? 'bg-stone-600' : ''}`}
        onClick={() => handleColorChange('text-stone-600')}
      ></button>
      <button
        className={`ml-2 h-6 w-6 rounded-full bg-cyan-900 ${selectedColor === 'text-cyan-900' ? 'bg-cyan-900' : ''}`}
        onClick={() => handleColorChange('text-cyan-900')}
      ></button>
      <p className={`mt-4 ${selectedColor} text-lg font-bold`}>
        This is sample text with {selectedColor} color.
      </p>
      <div className={`mt-4 ${selectedColor}-bg h-6 w-40 rounded-md`} />
      {/* <NeuroReader setColor={setColor} /> */}
    </div>


  )
}
