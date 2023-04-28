import React from 'react'
import { TextContext, SET_RESET, initialState } from '../utilities/MyContext'
import { useContext, useEffect } from 'react'

export default function Reset() {
    const [state, dispatch] = useContext(TextContext);
    
    const handleResetChange = () => {
        dispatch({ type: SET_RESET, payload: initialState});
    }

    
  useEffect(() => {
    // Update button classNames when state changes
    document.querySelectorAll('.text-size-button').forEach((button) => {
      if (button.dataset.size === state.textSize) {
        button.classList.add('bg-gray-900', 'text-white');
      } else {
        button.classList.remove('bg-gray-400', 'text-white');
      }
    });

    document.querySelectorAll('.text-color-button').forEach((button) => {
      if (button.dataset.color === state.textColor) {
        button.classList.add('bg-gray-400', 'text-white');
      } else {
        button.classList.remove('bg-gray-400', 'text-white');
      }
    });

    document.querySelectorAll('.text-font-button').forEach((button) => {
      if (button.dataset.font === state.textFont) {
        button.classList.add('bg-gray-400', 'text-white');
      } else {
        button.classList.remove('bg-gray-400', 'text-white');
      }
    });

    document.querySelectorAll('.text-weight-button').forEach((button) => {
      if (button.dataset.weight === state.textWeight) {
        button.classList.add('bg-gray-400', 'text-white');
      } else {
        button.classList.remove('bg-gray-400', 'text-white');
      }
    });

    document.querySelectorAll('.text-alignment-button').forEach((button) => {
      if (button.dataset.alignment === state.textAlignment) {
        button.classList.add('bg-gray-400', 'text-white');
      } else {
        button.classList.remove('bg-gray-400', 'text-white');
      }
    });
  }, [state]);


  return (
    <div>
        <p>Reset:</p>
        <button
            className={`border ${state.textSize === initialState.textSize ? 'border-gray-300' : 'border-red-400'} rounded-md py-2 px-4 mt-2 mr-2 hover:border-red-400 hover:text-white-500`}
            onClick={() => handleResetChange()}
        >
            Reset Settings
        </button>
    </div>
  )
}
