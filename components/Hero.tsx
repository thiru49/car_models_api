"use client";
import React from 'react'
import CustomButton  from './CustomButton'


const Hero = () => {
  const handleScroll = ()=>{
    
  }
  return (
    <div className='hero'>
     <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero_title'>
           Find,book or rent a car - quickly and easily!
        </h1>
        <p className='hero_subtitle'>
          Streamline our car rental experience with our effortlesss booking process
        </p>
        <CustomButton
        title='Explore Cars'
        containerStyles='bg-primary-blue text-white rounded-full mt-10 '
        handleClick = {handleScroll}
        />
     </div>
    </div>
  )
}

export default Hero