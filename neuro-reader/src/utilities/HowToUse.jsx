import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HowToUse() {

    const howTo = [
        {description: 'Start by navigating to our website and accessing the text input field', key: 0},
        {description: 'Enter the text you want to read into the input field.', key: 1},
        {description: 'Our website automatically convert the text into Neuro Reader neuro diverse approved format.', key: 2},
        {description: 'Start reading the converted text and take advantage of the customised support provided to help you read more easily and effectively.', key: 3}
    ];
  return (
    <div className='contain mx-auto py-2 text-center'>
        <h1 className='xl:text-xl text-xl font-bold mb-8 text-slate-700'>How to use Neuro Reader</h1>
        <div className=''>
            
            <ol className='text-left space-y-4 text-slate-500 text-justify font-light'>
                {howTo.map((instruction, index) => {
                    return (
                        <li key={instruction.key}>{index + 1}. {instruction.description}</li>
                    );
                })}
            </ol>
            <div className='m-6'>

            <NavLink to={'/'}>
      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Get started &#x27A1;</button>
    </NavLink>  
            </div>
        </div>
    </div>
  )
}
