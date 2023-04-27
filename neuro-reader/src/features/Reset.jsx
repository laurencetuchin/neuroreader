import React from 'react'
import { TextContext } from '../utilities/MyContext'

export default function Reset() {
    const [state, dispatch] = useContext(TextContext);
    
    const handleResetChange = () => {
        dispatch({ type: SET_RESET, payload: ""});
    }


  return (



    <div>
        <p>Reset:</p>
        <button
            className='border border-gray-300 rounded-md py-2 px-4 mt-2 mr-2 hover:border-red-400 hover:text-white-500'
            onClick={() => handleResetChange()}
        >
            Reset
        </button>
    </div>
  )
}
