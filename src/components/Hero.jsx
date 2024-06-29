import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px]
    w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <p>IT'S TIME TO GET</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Hercul<span className='text-blue-400'>ormous</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>Before I begin this journey, I pledge to give my all, every rep and every set.
                I swear to track my progress, push my <span className='text-blue-400 font-medium'>limits</span>, and leave no stone unturned in my quest to become <span className='text-blue-400 font-medium'>Herculormous</span>.
                From this moment on, I'm committed to becoming stronger, fitter, and unstoppable.</p>
            <Button func = {() => {
                window.location.href = '#generate'
            }} text = {"Accept & Begin"}/>
        </div>
    )
}

export default Hero
