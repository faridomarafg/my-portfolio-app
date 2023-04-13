import React from 'react'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub,AiOutlineInstagram} from "react-icons/ai";
import {useTypewriter} from 'react-simple-typewriter';

import contact_image from '../../images/contact.jpeg';

const ContactLeft = () => {

  const [text] = useTypewriter({
    words: ["Professional Coder", "Full stack developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed:10,
    delaySpeed: 2000
  });


  return (
    <div className="w-full md:w-full  h-fit bg-neutral-900 p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center relative">
      <img
        className="hidden md:block w-full h-64 object-cover rounded-lg mb-2"
        src={contact_image}
        alt="contact_image"
      />
      <div className="flex flex-col gap-4">
        {/* name */}
        <h3 className="text-3xl font-bold text-white">Farid Omar</h3>
        {/* field of work */}
         <div className='w-full h-2 pb-3'>
          <p className="text-lg font-normal text-yellow-400">
          {text}
          </p>
         </div>
        {/* description about me */}
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        {/* Location */}
        <p className="text-base text-yellow-400 flex items-center gap-2 ">
          Location: <span className="text-lightText text-slate-400">Delhi India</span>
        </p>
        {/* phone number */}
        <p className="text-base text-yellow-400 flex items-center gap-2">
          Phone: <span className="text-lightText text-gray-400">+91 7042220780</span>
        </p>
        {/* email address */}
        <p className=" text-base text-yellow-400 flex items-center gap-2">
          Email: <span className="text-lightText text-gray-400">fariedomar43@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/faried.ahmady/" target="_blank" className="bannerIcon">
            <FaFacebookF size={30} />
          </a>
          <a href="https://github.com/faridomarafg" target="_blank" className="bannerIcon">
            <AiFillGithub size={30}/>
          </a>
          <a href="https://www.linkedin.com/in/farid-omar-361b1a196/" target="_blank" className="bannerIcon">
            <FaLinkedinIn size={30} />
          </a>
          <a href="https://www.instagram.com/fariedomar43/" target="_blank" className="bannerIcon">
            <AiOutlineInstagram size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft