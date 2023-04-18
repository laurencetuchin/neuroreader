import React from 'react'
import { NavLink } from 'react-router-dom'
import 'tailwindcss/tailwind.css';


export default function About() {



  return (
    <>
    
    <div>
    <br />
    
    
    <p className='text-lg text-cyan-800'>Welcome to Neuro Reader, designed to help neuro diverse learners to read more easily and effectively. Our mission is to provide a platform that allows users to input their text and receive customised reading support to help them achieve their full potential.
    <br />
    <br />
    Our purpose is to make reading accessible to everyone, regardless of their neurodiversity. We understand that reading can be a challenge and frustrating experience for some learners, and we aim to provide a solution that caters to their unique needs. Our website uses innovative technology to identify and address the specific challenges that neuro diverse learners face when reading, whether it be difficulty with decoding, comprehension, or fluency. 
    <br />
    <br /> 
    At our core, we are dedicated to helping others. We believe that everyone has the right to access education and information, and we strive to remove the barriers that prevent some learners from doing so. Our team of experts is passionate about making a positive impact on the lives of those who use our platform, and we are committed to continuously improving our services to ensure that our users receive the support they need to succeed.
    </p>
    <br />
    <NavLink to={'/'}>
      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Get started</button>
    </NavLink>
    </div>
    </>
  )
}
