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
        { weightName: 'regular', weightValue: 'font-normal'},
        { weightName: 'medium', weightValue: 'font-medium'},
    ]

    const getButtonClass = (weight) => {
        if (weight.weightValue === state.textWeight){
            return 'border-2 border-slate-900';
        } 
        return 'border border-gray-300';
    }
  return (
    <div>
        <p className="text-lg font-medium text-slate-700 mt-2">Font weight:</p>
        {weightOptions.map((weight) =>
            <button 
                key={weight.weightValue}
                className={`text-justify border border-gray-300 rounded-md py-2 px-4 mt-2 mr-1 mb-2 ${weight.weightValue} ${getButtonClass(weight)}`}
                onClick={() => handleFontWeight(weight.weightValue)}
            >
                {weight.weightName}
            </button>
        )}
    </div>
  )
}
