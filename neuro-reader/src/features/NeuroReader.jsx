import React from 'react'
import { useState, useContext } from 'react'
import AdjustColor from './AdjustColor';
import { TextProvider, TextContext, SET_TEXT_COLOR } from '../utilities/MyContext';
import AdjustTextSize from './AdjustTextSize';
import AdjustTextFont from './AdjustTextFont';
import AdjustFontWeight from './AdjustFontWeight';
import Accessibility from './AccessibilityOptions';
import AccessibilityOptions from './AccessibilityOptions';
import { ThemeContext } from '../utilities/ThemeContext';

export default function NeuroReader() {
    const [textState, textDispatch] = useContext(TextContext);
    const {darkMode, toggleDarkMode} = useContext(ThemeContext);
    
    const [inputValue, setInputValue] = useState('');
    // const size = useContext(TextSizeContext);
    const borderClass = inputValue ? 'border border-gray-300 rounded-md py-2 px-4 mt-2' : '';
    const [showAccessibilityOptions, setShowAccessibilityOptions] = useState(true);

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function toggleAccessibilityOptions() {
      setShowAccessibilityOptions(!showAccessibilityOptions);
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
        <div className={darkMode ? 'dark' : 'light'}>

        <div className="flex flex-col">
          {!darkMode && (
            <button onClick={toggleDarkMode}>Toggle dark mode</button>
          )}
          {darkMode && (
            <button onClick={toggleDarkMode}>Toggle light mode</button>

          )}
          {showAccessibilityOptions && (
            <>
              <button className={`text-center mt-2 px-4 text-lg text-slate-400 border-gray-300 `} onClick={toggleAccessibilityOptions}>Hide accessibility options</button>
              <AccessibilityOptions />
            </>
          )}
          {!showAccessibilityOptions && (
            <button className='text-center mt-2 px-4 text-left text-slate-400 border-gray-300' onClick={toggleAccessibilityOptions}>Show accessibility options</button>
          )}
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
          <div>
          <div className={borderClass}>
          <div className={`${textState.textSize} ${textState.textColor} ${textState.textFont} ${textState.textWeight} ${textState.textAlignment}`}>
            {boldFirstLetters(inputValue)}
          </div>
          </div>
          
          </div>

        </div>
            </div>
          </>
      );
    
  
}
