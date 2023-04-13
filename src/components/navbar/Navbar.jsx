import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';

import { Link } from 'react-scroll';
import { useState } from 'react';

import nav_image from '../../images/nav_image.jpg';

function Navbar() {
  const [toggleMenue, setToggleMenue] = useState(false);
  
  const handleToggle = ()=> setToggleMenue(!toggleMenue);
  
  return (
    <div className='w-full px-5  h-[100px] md:h-[150px]  ml-[-17px] bg-[#38393b]  flex items-center justify-between border-b-[5px] border-b-neutral-800 fixed z-50'>
        {/* nav logo */}
        <div>
            <img 
            src={nav_image} 
            alt="nav_image" 
            className='w-[80px] h-[80px] md:w-[120px] md:h-[120px] border-4 border-neutral-700 rounded-full object-cover shadow-sm p-1 shadow-slate-200 hover:border-yellow-400 duration-1000 hover:shadow-yellow-400' />
        </div>
        {/* nav links */}
        <div className='flex gap-2'>
            <div className='hidden md:block'>
            <ul className='flex gap-8 text-lg font-playfair'>
                <li className='cursor-pointer hover:text-teal-500 duration-1000 hover:scale-110'>
                    <Link 
                    to='home'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Home</Link>
                </li>
                <li className='cursor-pointer hover:text-teal-500 duration-1000 hover:scale-110'>
                    <Link 
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Skills</Link>
                </li>
                <li className='cursor-pointer hover:text-teal-500 duration-1000 hover:scale-110'>
                    <Link 
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Projects</Link>
                </li>
                <li className='cursor-pointer hover:text-teal-500 duration-1000 hover:scale-110'>
                    <Link 
                    to='resume'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Resume</Link>
                </li>
                <li className='cursor-pointer hover:text-teal-500 duration-1000 hover:scale-110'>
                    <Link 
                    to='contacts'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Contacts</Link>
                </li>
            </ul>  
            </div>
            {/* moblie menue */}
            <div onClick={handleToggle} className='relative md:hidden z-50 '>
            {toggleMenue ?( <AiOutlineClose size={25} className='absolute right-1 cursor-pointer  text-white z-40 '/>) :
            (<GiHamburgerMenu size={25} className='absolute right-1 cursor-pointer  text-white z-40 '/>)}
            </div>
            <div className={toggleMenue ? 
            'w-[300px] bg-black opacity-80 flex h-screen absolute top-0 right-0  z-0 md:opacity-0 items-center justify-center ' :
            'hidden w-[300px] bg-black   h-screen absolute top-0 opacity-80 right-[-350px] z-0 items-center justify-center  '
            }>
                <ul className='flex flex-col gap-8 text-lg font-playfair'>
                <li className='cursor-pointer hover:text-teal-500 duration-1000 hover:scale-110'>
                    <Link 
                    onClick={handleToggle}
                    to='home'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Home</Link>
                </li>
                <li className='cursor-pointer hover:text-teal-500 duration-1000 hover:scale-110'>
                    <Link 
                    onClick={handleToggle}
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Skills</Link>
                </li>
                <li className='cursor-pointer hover:text-teal-500 duration-1000 hover:scale-110'>
                    <Link 
                    onClick={handleToggle}
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Projects</Link>
                </li>
                <li className='cursor-pointer hover:text-teal-500 duration-1000 hover:scale-110'>
                    <Link 
                    onClick={handleToggle}
                    to='resume'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Resume</Link>
                </li>
                <li className='cursor-pointer hover:text-teal-500 duration-1000 hover:scale-110'>
                    <Link 
                    onClick={handleToggle}
                    to='contacts'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Contacts</Link>
                </li>
            </ul>  
            </div>
        </div>
    </div>
  )
}

export default Navbar