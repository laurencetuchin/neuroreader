import React from 'react'
import { useState, useContext } from 'react'
import AdjustColor from './AdjustColor';
import { TextProvider, TextContext, SET_TEXT_COLOR } from '../utilities/MyContext';
import AdjustTextSize from './AdjustTextSize';
import AdjustTextFont from './AdjustTextFont';
import AdjustFontWeight from './AdjustFontWeight';

export default function NeuroReader({ textSize }) {
    const [textState, textDispatch] = useContext(TextContext);
    
    const [inputValue, setInputValue] = useState('');
    // const size = useContext(TextSizeContext);

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    const magicColor = "text-red-900";
    
    

    // function that takes word input length and identifies whether appropriate to bold or not
    // need to update to include min one character if word length < 3 
    function boldFirstLetters(text) {
        const words = text.split(/[' ']/);
        const boldedWords = words.map(word => {
          if (word.length < 3) {
            const smallWord = word.charAt(0);

            // fix word length only split char 1 
            // checks for period or comma 
            return (
                <span>
                    <span className="font-bold">{smallWord}
                </span>
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
              <span>
                <span className="font-bold">
                  {boldText}
                </span>
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
          <AdjustTextSize />
          <AdjustColor />
          <AdjustTextFont />
          <AdjustFontWeight />
          <label className="text-left mb-2 px-4 py-2 mt-2 text-base" htmlFor="input-text">
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
          <div className='py-4 text-left text-base px-4'><p>Output text:</p></div>
          {/* <div className={`${size}`}>is size {size}</div> */}
          <div className={`${textState.textSize} ${textState.textColor} ${textState.textFont} ${textState.textWeight}`}>
            {boldFirstLetters(inputValue)}
          </div>
          <div>the color is: {magicColor}</div>
          <div className={`${textState.textColor} ${textState.textSize} ${textState.textFont} ${textState.textWeight}`}>the color is now: </div>
          <div>the text size is {textSize}</div>
          {/* <MyContext /> */}

        </div>
          </>
      );
    
  
}
