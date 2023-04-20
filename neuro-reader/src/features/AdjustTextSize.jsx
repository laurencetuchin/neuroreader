import { useState } from "react";
import React from 'react'

export default function AdjustTextSize() {

    const [selectedSize, setSelectedSize] = useState('text-base');
  return (
    <div>
        <button className={`mr-2 px-2 py-1 rounded ${selectedSize} === 'text-sm' ? 
        'bg-gray-300' : ''}`} onClick={() => setSelectedSize('text-sm')}>
            Small
        </button>


    </div>
  )
}
