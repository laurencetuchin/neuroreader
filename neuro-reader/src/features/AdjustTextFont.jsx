import { useState, useContext } from "react";
import React from 'react'
import { TextContext, SET_TEXT_FONT } from "../utilities/MyContext";



export default function AdjustTextFont() {

    const [state, dispatch] = useContext(TextContext);
    const [selectedFont, setSelectedFont] = useState('font-sans');

    const handleFontChange = (font) => {
        dispatch({ type: SET_TEXT_FONT, payload: font });
        setSelectedFont(font);
    }

    const fontOptions = [
        { fontName: 'Modern', fontValue: 'font-sans'},
        { fontName: 'Typewriter', fontValue: 'font-serif'},
        { fontName: 'Spaced', fontValue: 'font-mono'},
    ]

    const getButtonClass = (font) => {
        if (font.fontValue === state.textFont){
            return 'border-2 border-slate-900';
        }
        return 'border border-gray-300';
    }

  return (
    <div>
        <p>Select a font:</p>
        {fontOptions.map((font) => (
            <button 
                key={font.fontValue}
                className={`border border-gray-300 rounded-md py-2 px-4 mt-2 mr-2 ${font.fontValue} ${getButtonClass(font)}`}
                onClick={() => handleFontChange(font.fontValue)} 
                >
                    {font.fontName}
                </button>
        ))}
    </div>
  );
}
