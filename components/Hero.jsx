import React from 'react'

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        <div className='absolute inset-0 bg-black/50 z-[2]' />
        <div className='text-white p-5 z-[2] sm:ml-[-10rem] ml-0 mt-[-10rem]'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='py-5 text-xl'>{message}</p>
            <button className='px-8 py-2 border rounded-xl hover:bg-white/30'>Book</button>
        </div>
    </div>
  )
}

export default Hero