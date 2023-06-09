import React from 'react'
import { useState, useContext } from 'react'
import { TextContext, SET_TEXT_COLOR } from '../utilities/MyContext';


export default function AdjustColor() {
    const [state, dispatch] = useContext(TextContext);
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorChange = (color) => {
      dispatch({ type: SET_TEXT_COLOR, payload: color });
      setSelectedColor(color);
    };

    // const [selectedColor, setSelectedColor] = useState(magicColor);

    // const handleColorChange = (color) => {
    //     setSelectedColor(color);
    // };

    const setColor = 'text-red-500';


    const colorOptions = [
      { colorName: 'Yellow', colorValue: 'text-yellow-400' },
      { colorName: 'Orange', colorValue: 'text-orange-500' },
      { colorName: 'Pink', colorValue: 'text-pink-500' },
      { colorName: 'Rose', colorValue: 'text-rose-400' },
      { colorName: 'Cyan', colorValue: 'text-cyan-500' },
      { colorName: 'Blue', colorValue: 'text-sky-600' },
      { colorName: 'Violet', colorValue: 'text-violet-400' },
      { colorName: 'Teal', colorValue: 'text-teal-600' },
      { colorName: 'Green', colorValue: 'text-green-600' },
      { colorName: 'Grey', colorValue: 'text-gray-600' },
      { colorName: 'Stone', colorValue: 'text-stone-600' },
      { colorName: 'Zinc', colorValue: 'text-zinc-500' },
    ];

    const getButtonClass = (color) => {
      if (color.colorValue === state.textColor) {
        return 'border-2 border-slate-900';
      }
      return 'border border-gray-300';
    };
  
    return (
      <div>
        <p className='text-lg font-medium text-slate-700 mt-2'>Choose a text color:</p>
        {colorOptions.map((color) => (
          <button
            key={color.colorValue}
            className={`border border-gray-300 rounded-md py-2 px-4 mt-2 mr-1 mb-2 ${color.colorValue} ${getButtonClass(color)}`}
            onClick={() => handleColorChange(color.colorValue)}
          >
            {color.colorName}
          </button>
        ))}
      </div>
    );
}
