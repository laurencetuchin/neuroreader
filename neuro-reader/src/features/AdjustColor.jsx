import React from 'react'
import { useState, useContext } from 'react'
import { TextContext } from '../utilities/MyContext';


export default function AdjustColor() {
    const [state, dispatch] = useContext(TextContext);

    const handleColorChange = (color) => {
      dispatch({ type: 'SET_TEXT_COLOR', payload: color });
    };

    // const [selectedColor, setSelectedColor] = useState(magicColor);

    // const handleColorChange = (color) => {
    //     setSelectedColor(color);
    // };

    const setColor = 'text-red-500';


    const colorOptions = [
      { colorName: 'Pink', colorValue: 'text-pink-500' },
      { colorName: 'Stone', colorValue: 'text-stone-600' },
      { colorName: 'Cyan', colorValue: 'text-cyan-900' }
    ];
  
    return (
      <div>
        <p>Choose a text color:</p>
        {colorOptions.map((color) => (
          <button
            key={color.colorValue}
            className={`border border-gray-300 rounded-md py-2 px-4 mt-2 mr-2 ${color.colorValue}`}
            onClick={() => handleColorChange(color.colorValue)}
          >
            {color.colorName}
          </button>
        ))}
      </div>
    );
}
