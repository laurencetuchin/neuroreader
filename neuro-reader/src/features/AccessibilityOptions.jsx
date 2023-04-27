import React from 'react'
import AdjustColor from './AdjustColor'
import AdjustFontWeight from './AdjustFontWeight'
import AdjustTextFont from './AdjustTextFont'
import AdjustTextSize from './AdjustTextSize'


export default function AccessibilityOptions() {
  return (
    <>
    <div>
        <h4 className='py-4'>Accessibility options</h4>
    </div>
        <AdjustTextSize />
        <AdjustColor />
        <AdjustTextFont />
        <AdjustFontWeight />
    </>
  )
}
