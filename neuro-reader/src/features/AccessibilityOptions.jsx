import React from 'react'
import AdjustAlignment from './AdjustAlignment'
import AdjustColor from './AdjustColor'
import AdjustFontWeight from './AdjustFontWeight'
import AdjustTextFont from './AdjustTextFont'
import AdjustTextSize from './AdjustTextSize'
import Reset from './Reset'


export default function AccessibilityOptions() {
  return (
    <>
    <div>
        <h4 className='py-4 xl:text-2xl text-lg font-medium text-slate-600'>Accessibility options</h4>
    </div>
        <AdjustTextSize />
        <AdjustColor />
        <AdjustTextFont />
        <AdjustFontWeight />
        <AdjustAlignment />
        <Reset />
    </>
  )
}
