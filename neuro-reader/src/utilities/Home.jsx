import React from 'react'
import NeuroReader from '../features/NeuroReader'
import NeuroReaderBranding from './NeuroReaderBranding'

export default function Home() {
  return (
    <div>
    
        <div className="bg-primary">Welcome to Neuro Reader</div>
        <p className='font-sans text-base hover:capitalize'>It's time to upgrade your reading</p>
        {/* Add animation that bolds the writing in the P tag */}
        <NeuroReader />
    </div>
  )
}
