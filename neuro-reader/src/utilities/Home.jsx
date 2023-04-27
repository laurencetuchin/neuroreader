import React from 'react'
import AdjustTextSize from '../features/AdjustTextSize'
import NeuroReader from '../features/NeuroReader'
import NeuroReaderBranding from './NeuroReaderBranding'

export default function Home() {
  const textSize = 'text-5xl';
  return (
    <div className='container m-auto'>
      <div className='py-4'>

    
        <div className="text-lg bg-primary py-2">Welcome to Neuro Reader</div>
        <p className='font-sans text-base py-2'>It's time to upgrade your reading</p>
        
        {/* Add animation that bolds the writing in the P tag */}
        <NeuroReader textSize={textSize}/>
      
      </div>
    </div>
  )
}
