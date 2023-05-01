import React from 'react'
import { useState, useContext } from 'react'
import AdjustColor from './AdjustColor';
import { TextProvider, TextContext, SET_TEXT_COLOR } from '../utilities/MyContext';
import AdjustTextSize from './AdjustTextSize';
import AdjustTextFont from './AdjustTextFont';
import AdjustFontWeight from './AdjustFontWeight';
import Accessibility from './AccessibilityOptions';
import AccessibilityOptions from './AccessibilityOptions';

export default function NeuroReader() {
    const [textState, textDispatch] = useContext(TextContext);
    
    const [inputValue, setInputValue] = useState('');
    // const size = useContext(TextSizeContext);

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    
    

    // function that takes word input length and identifies whether appropriate to bold or not
    // need to update to include min one character if word length < 3 
    function boldFirstLetters(text) {
        const words = text.split(/[' ']/);
        const boldedWords = words.map((word, index) => {
          if (word.length < 3) {
            const smallWord = word.charAt(0);
        
            // fix word length only split char 1 
            // checks for period or comma 
            return (
              <span key={index}>
                <span className="font-bold">{smallWord}</span>
                <span>{word.slice(smallWord.length)}</span>    
                {/* <span>&nbsp;</span> */}
              </span>
            );
          } else {
            // percentage calculation of word length
            // opportunity to increase bold dominance score function
            const wordLength = word.length * 40 / 100;
            const boldText = word.slice(0, wordLength);
            const plainText = word.slice(wordLength);
            return (
              <span key={index}>
                <span className="font-bold">{boldText}</span>
                {plainText}
                {/* <span>&nbsp;</span> */}
              </span>
            );
          }
        });
        return boldedWords.reduce((prev, curr) => [prev, ' ', curr]);
      }
    
      return (
        <>

        <div className="flex flex-col">
          <AccessibilityOptions />
          {/* <AdjustTextSize />
          <AdjustColor />
          <AdjustTextFont />
          <AdjustFontWeight /> */}
          <label className="text-left mt-2 px-4 text-lg text-slate-400" htmlFor="input-text">
            Enter your text below:
          </label>
          <textarea
            className="border border-gray-300 rounded-md py-2 px-4 mt-2"
            value={inputValue}
            onChange={handleInputChange}
            id="input-text"
            rows={5}
            placeholder="Enter your text here"
            />
          <div className='py-2 text-left text-lg px-4 text-slate-400'><p>Output text:</p></div>
          <div className={`${textState.textSize} ${textState.textColor} ${textState.textFont} ${textState.textWeight} ${textState.textAlignment}`}>
            {boldFirstLetters(inputValue)}
          </div>

        </div>
          </>
      );
    
  
}
