import {useTypewriter} from 'react-simple-typewriter'
import {motion} from 'framer-motion';
import {AiOutlineLinkedin, AiFillGithub, AiOutlineInstagram, AiOutlineFacebook} from 'react-icons/ai';

import banner_image from '../../images/banner_image.jpg'

function Banner() {
  const [text] = useTypewriter({
    words: ["Professional Coder", "Full stack developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed:10,
    delaySpeed: 2000
  });


  return (
    <div 
    id='home' 
    className='w-full h-fit pb-20 flex  md:pr-16 sm:pr-0  border-b-[5px] border-b-neutral-800 pt-[200px] gap-16' 
    >
    {/* left side     */}
    <div className='w-full pt-4 md:w-1/2 flex flex-col gap-16'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-xl sm:text-3xl md:text-5xl text-white font-bold'>Hi, I'm 
        &nbsp;<span className='text-emerald-600'>Frid omar</span>
        </h1>
        <h2 className='h-3 sm:h-16 text-xl text-teal-600 sm:text-2xl md:text-4xl font-bold sm:text-white'>
            a <span className='font-playfair text-[20px] text-red-400 sm:text-white sm:text-2xl md:text-4xl'>{text}</span>
        </h2>
        {/* description about my self */}
        <p className='text-sm font-playfair text-yellow-400'> 
        I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps.
        <br />
        A reliable full stack developer whit solid knowledge in React.js, Node.js, Express js, Mongo-DB, java script, css, tailwind-css. 
        <br />
        A freelancer as a Mern-stack developer who can help you at front-end whit react-js and javascrip, in backend whit the most demanded technologies node.js, express, and javascrip.
        </p>
      </div>
      {/* icons section */}
      <div className='flex w-full items-center flex-col gap-10'>
        {/* social media icons */}
        <div className='flex-1 flex-col items-center justify-center'>
          <h1 className='text-center pb-3 font-semibold text-2xl text-yellow-100'>Find me in </h1>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        >
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 md:gap-16 sm:gap-16 gap-5 md:pl-4'>
            <a href="https://www.linkedin.com/in/farid-omar-361b1a196/" target="_blank" >
             <AiOutlineLinkedin className='text-[70px] hover:border-2 hover:shadow-yellow-400 hover:border-yellow-400 duration-1000 shadow-lg shadow-slate-400 rounded-lg'/>
            </a>
            <a href="https://github.com/faridomarafg" target="_blank" >
             <AiFillGithub className='text-[70px] hover:border-2 hover:shadow-yellow-400 hover:border-yellow-400 duration-1000 shadow-lg shadow-slate-400 rounded-lg'/>
            </a>
            <a href="https://www.instagram.com/fariedomar43/" target="_blank" >
             <AiOutlineInstagram className='text-[70px] hover:border-2 hover:shadow-yellow-400 hover:border-yellow-400 duration-1000 shadow-lg shadow-slate-400 rounded-lg'/>
            </a>
            <a href="https://www.facebook.com/faried.ahmady/" target="_blank" >
             <AiOutlineFacebook className='text-[70px] hover:border-2 hover:shadow-yellow-400 hover:border-yellow-400 duration-1000 shadow-lg shadow-slate-400 rounded-lg'/>
            </a>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
    {/* right side */}
    <div className='hidden md:w-1/2 md:flex justify-end mt-10 mr-10'>
        <div className=' h-fit'>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1.5 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        >
        <div className=''>
                <img 
                src={banner_image} 
                alt="banner_image"
                className='cursor-pointer border-8 border-b-neutral-700 rounded-xl p-1 w-[350px] h-[500px] shadow-lg shadow-slate-400  hover:filter hover:saturate-200 transition  object-cover hover:border-yellow-400 hover:scale-105 duration-1000'
                />
            </div>
        </motion.div>
        </div>
    </div>
    </div>
  )
}

export default Banner