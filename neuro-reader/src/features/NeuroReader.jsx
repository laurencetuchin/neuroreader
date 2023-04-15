import React from 'react'
import { useState } from 'react'

export default function NeuroReader() {

    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    // function that takes word input length and identifies whether appropriate to bold or not
    function boldFirstLetters(text, percentage) {
        const words = text.split(' ');
        const boldedWords = words.map(word => {
          const boldLength = Math.floor(word.length * percentage / 100);
          const boldText = word.slice(0, boldLength);
          const plainText = word.slice(boldLength);
          return (
            <span>
              <span className="font-bold">
                {boldText}
              </span>
              {plainText}
            </span>
          );
        });    
        return boldedWords.reduce((prev, curr) => [prev, ' ', curr]);
    }
    
    return (
        <div className="flex flex-col">
          <label className="mb-2 font-bold text-lg" htmlFor="input-text">
            Enter a paragraph:
          </label>
          <div className="flex flex-wrap">
            {boldFirstLetters(inputValue, 40)}
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
