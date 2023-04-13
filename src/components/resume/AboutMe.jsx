import {motion} from 'framer-motion'

function AboutMe() {
  return (
    <section className='w-full h-fit flex flex-col'>
    {/* Bio */}
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1.5 }}
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }}
    className='w-full h-fit border-4 border-neutral-600 rounded-xl p-4 my-4 '>
      {/* bio title */}
      <h1 className='text-center text-lg md:text-4xl pb-3  text-red-400 font-playfair'>Biography</h1>
      {/* bio text */}
      <p className='text-[14px] md:text-xl text-slate-100 font-thin font-playfair italic'>
      I'm Farid omar a full-stack developer from Herat Afghanistan, Currently based in Delhi India.
      <br />
      Graduated as  Bachelor of Computer Science and Second-lieutenant officer of Nationl-Army-of-Afghanistan from ( NMAA Defense University (National Military Academy of Afghanistan) in 2015.
      <br />
      Studying Computer application at MDU (Maharshi Dayanand University) — 2020 – Present.
      <br />
       Taught web-technologies as a teacher in National-military Academy of Afghanistan from 2016 - 2019.
       <br />
       Completed successfully  two months intership in a US software-company ( GitStart ) as a software engineer 
       <br />
       A reliable full stack developer whit solid knowledge in React.js, Node.js, Express js, Mongo-DB, java script, css, tailwind-css.
       <br />
       A freelancer as a Mern-stack developer who can help you at front-end whit react-js and javascrip, in backend whit the most demanded technologies node.js, express, and javascrip.
      </p>
    </motion.div>
    {/* Left side Hobbies and languages */}
    <div className='flex flex-col md:flex-row gap-2'>
      {/* hobbies */}
      <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5 }}
      variants={{
        hidden: { opacity: 0 ,x:-50},
        visible: { opacity: 1,x:0 },
      }}
      className='flex-1 flex-col w-full h-fit border-4 border-neutral-600 rounded-xl p-4 mr-0 md:my-4 bg-blue-600'>
      <h1 className='text-center text-white text-xl font-playfair font-semibold'>Hobbies</h1>
      <p className='text-yellow-400  w-full bg-neutral-700 rounded-lg px-1 my-1 font-playfair text-center'>Photography</p>
      <p className='text-yellow-400  w-full bg-neutral-700 rounded-lg px-1 my-1 font-playfair text-center'>Fitness</p>
      <p className='text-yellow-400  w-full bg-neutral-700 rounded-lg px-1 my-1 font-playfair text-center'>music</p>
      </motion.div>

      {/* Languages */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5 }}
      variants={{
        hidden: { opacity: 0 ,x:50},
        visible: { opacity: 1,x:0 },
      }}
      className='flex-1 flex-col w-full h-fit border-4 border-neutral-600 rounded-xl p-4 my-2 md:my-4 bg-teal-600'>
      <h1 className='text-center text-white text-xl font-playfair font-semibold'>Languages</h1>
       <div>
        {/* type of language */}
        <p className='text-slate-200  w-full bg-neutral-700 rounded-lg px-1 my-1 font-playfair'>
          Persion
          :&nbsp;
          {/* Level of speaking */}
          <span className='font-thin font-sans text-yellow-400'>Native</span>
        </p>
       </div>

       <div>
        {/* type of language */}
        <p className='text-slate-200  w-full bg-neutral-700 rounded-lg px-1 my-1 font-playfair'>
          English
          :&nbsp;
          {/* Level of speaking */}
          <span className='font-thin font-sans text-yellow-400'>Excellent</span>
        </p>
       </div>
       
      </motion.div>

      
      {/* right side */}
    </div>
    </section>
  )
}

export default AboutMe