import React from 'react'
import { useState } from 'react'

export default function NeuroReader() {

    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    // function that takes word input length and identifies whether appropriate to bold or not
    // need to update to include min one character if word length < 3 
    function boldFirstLetters(text) {
        const words = text.split(' ');
        const boldedWords = words.map(word => {
          if (word.length < 3) {
            const smallWord = word.charAt(0);

            // fix word length only split char 1 
            return (
                <span>
                    <span className="font-bold">{smallWord}
                </span>
                    <span>{word.slice(smallWord.length)}</span>    
                <span>&nbsp;</span>
            </span>
            );
          } else {
            // percentage calculation of word length
            const wordLength = word.length * 40 / 100;
            const boldText = word.slice(0, wordLength);
            const plainText = word.slice(wordLength);
            return (
              <span>
                <span className="font-bold">
                  {boldText}
                </span>
                {plainText}
                  <span>&nbsp;</span>
                <p> </p>
              </span>
            );
          }
        });
        return boldedWords.reduce((prev, curr) => [prev, ' ', curr]);
      }
    
      return (
        <div className="flex flex-col">
          <label className="mb-2 font-bold text-lg" htmlFor="input-text">
            Enter a paragraph:
          </label>
          <div className="flex flex-wrap">
            {boldFirstLetters(inputValue)}
          </div>
          <textarea
            className="border border-gray-300 rounded-md py-2 px-4 mt-2"
            value={inputValue}
            onChange={handleInputChange}
            id="input-text"
            rows={5}
          />
        </div>
      );
    
  
}
