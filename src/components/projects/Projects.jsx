import {motion} from 'framer-motion';
import {AiFillGithub} from 'react-icons/ai';

import blogImg from '../../images/blogImg.png';

const projectImg = 'https://www.iwantclarity.com/wp-content/uploads/2018/10/Website-Redesign-More-Than-Just-Aesthetics@2x-100.jpg';

function Projects() {
  return (
    <div id='projects' className='h-fit w-full flex flex-col items-center py-10 pt-10 border-b-[5px] border-b-neutral-800'>

      {/* compoent title section */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, y:-50},
        visible: { opacity: 1, y:0},
      }}
      >
        <h1 className='text-4xl md:text-6xl sm:text-6xl text-teal-600 sm:text-teal-600 font-extrabold font-playfair pb-6'>
          Projects
        </h1>
      </motion.div>

      {/* project section */}
      <motion.div
      className='w-full pt-5 grid md:grid-cols-2 gap-10'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5 }}
      variants={{
        hidden: { opacity: 0, x:50},
        visible: { opacity: 1, x:0},
      }}
      >
        <div className='flex flex-col border-2 bg-[#2d2c27] hover:bg-[#f6d0245b] rounded-t-2xl  h-fit hover:opacity-80 duration-1000 hover:scale-[103%] relative'>
          {/*imag */}
          <img src={blogImg} alt="projectImg" className='w-full h-[130px] md:h-[200px] object-cover rounded-t-2xl' />
          {/* description */}
          <p className='absolute text-yellow-400 text-[9.5px] md:text-[12px] pt-7 md:pt-0 italic  md:text-white rounded-t-2xl px-2 flex justify-center items-center bg-black opacity-0 hover:opacity-80 h-[155px] duration-1000'>
          This is a full-stack web blog application where you can create a user name, login, create, update, delete, like and comment the post, and it's good to remind you that user can delete, and update only its own post, once user logged those post which is created by user shows the delete and update icon, and also each post shows its creator name.
          <br />
          this blog is fully responsive
          <br />
          Frontend used technologies: React.js, tailwind-css, Redux-toolkit, Redux-thunk.
          <br />
          Backend used technologies: Node.js, express.js, Mongo-DB
          </p>
          {/*title */}
          <h1 className='text-center text-xl font-playfair'>Ecommerce websit</h1>
          {/*links */}
          <div className='flex items-center justify-between px-1 py-3'>
            <span className='text-[35px] cursor-pointer'>
              {/* github link */}
              <a href="https://github.com/faridomarafg/mern-stack-blog-v1-backend" target='_blank'>
                <AiFillGithub className='rounded-full hover:scale-110 hover:text-teal-500 duration-1000'/>
              </a>
            </span>
            <span className='text-[25px] cursor-pointer hover:text-teal-600 duration-1000 hover:scale-105 font-semibold font-playfair'>
              {/* demo link */}
              <a href="https://mern-stack-blog-v1-frontend.onrender.com/" target='_blank'>Demo</a>
            </span>
          </div>
        </div> 
        
      </motion.div>
    </div>
  )
}

export default Projects