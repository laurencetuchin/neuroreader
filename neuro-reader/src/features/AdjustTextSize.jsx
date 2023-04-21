import { useState } from "react";
import React from 'react'

export default function AdjustTextSize() {

    const [selectedSize, setSelectedSize] = useState('text-base');
  return (
    <div>
        <p>Select your text size: </p>
        <button className={`mr-2 px-2 py-1 rounded ${selectedSize} === 'text-sm' ? 
        'bg-gray-300' : ''}`} onClick={() => setSelectedSize('text-sm')}>
            Small
        </button>
        <button
        className={`mx-2 px-2 py-1 rounded ${selectedSize === 'text-base' ? 'bg-gray-300' : ''}`}
        onClick={() => setSelectedSize('text-base')}
      >
        Medium
      </button>
      <button
        className={`ml-2 px-2 py-1 rounded ${selectedSize === 'text-lg' ? 'bg-gray-300' : ''}`}
        onClick={() => setSelectedSize('text-lg')}
      >
        Large
      </button>

        <p className={`mt-4 ${selectedSize}`}>This is sample text with {selectedSize} size.</p>
    </div>
  )
}
