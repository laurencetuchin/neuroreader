import React from 'react'

export default function HowToUse() {

    const howTo = [
        {description: 'Start by navigating to our website and accessing the text input field', key: 0},
        {description: 'Enter the text you want to read into the input field.', key: 1},
        {description: 'Our website automatically convert the text into Neuro Reader neuro diverse approved format.', key: 2},
        {description: 'Start reading the converted text and take advantage of the customised support provided to help you read more easily and effectively.', key: 3}
    ];
  return (
    <div className='contain mx-auto py-12'>
        <h1 className='text-lg mb-12 text-left '>How to use Neuro Reader</h1>
        <div className=''>
            
            <ol className='text-left text-base space-y-6 flex flex-wrap' type="1">
                {howTo.map((instruction, index) => {
                    return (
                        <li key={instruction.key}>{index + 1}. {instruction.description}</li>
                    );
                })}
            </ol>
        </div>
    </div>
  )
}
