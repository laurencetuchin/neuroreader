import React from 'react'
import { useContext, useState} from 'react';
import { TextContext, SET_TEXT_ALIGNMENT } from '../utilities/MyContext';

export default function AdjustAlignment() {

    const [state, dispatch] = useContext(TextContext);
    const [selectedAlignment, setSelectedAlignment] = useState(null);

    const handleAlignmentChange = (alignment) => {
        dispatch({ type: SET_TEXT_ALIGNMENT, payload: alignment});
        setSelectedAlignment(alignment);
    };
    
    const getButtonClass = (value) => {
        if (value.alignmentValue === selectedAlignment){
            return 'border-2 border-slate-900';
        }
        return 'border border-gray-300';
    }
    

    const alignmentOptions = [
        { alignmentName: 'Left', alignmentValue: 'text-left'},
        { alignmentName: 'Center', alignmentValue: 'text-center'},
        { alignmentName: 'Right', alignmentValue: 'text-right'},
        { alignmentName: 'Justify', alignmentValue: 'text-justify'}

    ]

  return (

    <div>
        <p>Select an alignment:</p>
        {alignmentOptions.map((value) => (
            <button 
                key={value.alignmentValue}
                className={`border border-gray-300 rounded-md py-2 px-4 mt-2 mr-2 ${value.alignmentValue} ${getButtonClass(value)}`}
                onClick={() => handleAlignmentChange(value.alignmentValue)}
            >
                {value.alignmentName}
            </button>
        ))}
    </div>
  )
}
