import React from 'react'
//import SocialMediaIcons from '../components/SocialMediaIcons'


function Footer() {
  return (
    <footer className='w-full h-[150px] flex flex-col items-center shadow-t-lg shadow-t-slate-200'>
      <div className='w-5/6  '>
        {/* <SocialMediaIcons/> */}
        <div className='flex flex-col items-center justify-center'>
            <p className='font-playfair font-semibold  md:text-2xl pt-6'>FARID OMAR</p>
            <p className='font-playfair text-sm md:text-md pt-6'>@2023 OMAR. All Rights Reserved.</p>
        </div>
      </div>  
    </footer>
  )
}

export default Footer