import React from 'react'
import { useContext, useState } from 'react';
import { TextContext, SET_FONT_WEIGHT } from '../utilities/MyContext';

export default function AdjustFontWeight() {

    const [state, dispatch] = useContext(TextContext);
    const [selectedWeight, setWeight] = useState('font-normal');

    const handleFontWeight = (weight) => {
        dispatch({ type: SET_FONT_WEIGHT, payload: weight})
        setWeight(weight);
    }

    const weightOptions = [
        { weightName: 'thin', weightValue: 'font-thin'},
        { weightName: 'light', weightValue: 'font-light'},
        { weightName: 'regular', weightValue: 'font-normal'},
        { weightName: 'medium', weightValue: 'font-medium'},
        { weightName: 'black', weightValue: 'font-black'},
    ]

    const getButtonClass = (weight) => {
        if (weight.weightValue === selectedWeight){
            return 'border-2 border-slate-900';
        } 
        return 'border border-gray-300';
    }
  return (
    <div>
        <p>Select a weight:</p>
        {weightOptions.map((weight) =>
            <button 
                key={weight.weightValue}
                className={`border border-gray-300 rounded-md py-2 px-4 mt-2 mr-2 ${weight.weightValue} ${getButtonClass(weight)}`}
                onClick={() => handleFontWeight(weight.weightValue)}
            >
                {weight.weightName}
            </button>
        )}
    </div>
  )
}
