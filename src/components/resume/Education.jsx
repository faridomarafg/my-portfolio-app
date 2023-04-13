import {motion} from 'framer-motion'

function Education() {
  return (
    <section className='w-full h-fit'>
      <div className='flex flex-col md:flex-row gap-4'>
      {/* left sid education */}
      <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0 ,x:-50},
        visible: { opacity: 1,x:0 },
      }}
      className='flex-1 flex-col border-b-4 border-b-neutral-600 pb-4 md:border-none'>
        <h1 className='pl-1 pb-3 text-white text-2xl'>Educations</h1>
        {/* educations */}
        <div className='flex flex-col gap-4 md:gap-2'>

        <div className='flex flex-col border-4 border-neutral-700 py-4 px-2 bg-neutral-700  rounded-xl'>
          {/* degree */}
          <h1 className='text-xl font-semibold'>
            Bachelor &nbsp;
          <span className='text-xs text-yellow-200'>Of Computer Science</span>
          </h1>
          {/* University */}
          <h1 className='text-xl font-semibold'>
            NMAA &nbsp;
          <span className='text-xs text-yellow-200'>National military academy of Afghanistan</span>
          </h1>
          {/* date */}
          <h1>
            <h2 className='text-xl font-semibold'>
              From &nbsp; 
              <span className='text-xs text-yellow-200'>2010 &nbsp;</span> 
              <span className='text-sm'>To &nbsp;</span> 
              <span className='text-xs text-yellow-200'>2015</span>
            </h2>
          </h1>
        </div>

        <div className='flex flex-col border-4 border-neutral-700 py-4 px-2 bg-neutral-700  rounded-xl'>
          {/* degree */}
          <h1 className='text-xl font-semibold'>
          Studying Computer application &nbsp;
          <span className='text-xs text-yellow-200'></span>
          </h1>
          {/* University */}
          <h1 className='text-xl font-semibold'>
            MDU &nbsp;
          <span className='text-xs text-yellow-200'>( Maharshi Dayanand University )</span>
          </h1>
          {/* date */}
          <h1>
            <h2 className='text-xl font-semibold'>
              From &nbsp; 
              <span className='text-xs text-yellow-200'>2020 &nbsp;</span> 
              <span className='text-sm'>To &nbsp;</span> 
              <span className='text-xs text-yellow-200'>Present</span>
            </h2>
          </h1>
        </div>

        </div> 

      </motion.div>
      {/* right sid jobs experience */}
      <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5 }}
      variants={{
        hidden: { opacity: 0 ,x:50},
        visible: { opacity: 1,x:0 },
      }}
      className='flex-1 flex-col gap-8'>
      <h1 className='pl-1 pb-3 text-2xl'>Jobs Experience</h1>
      {/* xeperiences */}
      <div className='flex flex-col gap-4 md:gap-2'>
      <div className='flex flex-col border-4 border-neutral-700 py-4 px-2 bg-neutral-700  rounded-xl'>
          {/* Company */}
          <h1 className='text-xl font-semibold'>
            Git-Start &nbsp;
          {/* rule   */}
          <span className='text-xs text-yellow-200'>As a soft wear engineer</span>
          </h1>
          {/* Location */}
          <h1 className='text-xl font-semibold'>
            Location &nbsp;
          <span className='text-xs text-yellow-200'>
            USA &nbsp;
            <span className='font-thin'>
              Work through online
            </span>
            </span>
          </h1>
          {/* type of job */}
          <h1 className='text-xl font-semibold'>
            Type of Job &nbsp;
          <span className='text-xs text-yellow-200'>Intership</span>
          </h1>
          {/* date */}
          <h1>
            <h2 className='text-xl font-semibold'>
              From &nbsp; 
              <span className='text-xs text-yellow-200'>2010 &nbsp;</span> 
              <span className='text-sm'>To &nbsp;</span> 
              <span className='text-xs text-yellow-200'>2015</span>
            </h2>
          </h1>
      </div>

      <div className='flex flex-col border-4 border-neutral-700 py-4 px-2 bg-neutral-700  rounded-xl'>
          {/* Company */}
          <h1 className='text-xl font-semibold'>
            NMAA - (National Military academy of Afghanistan) &nbsp;
          {/* rule   */}
          <span className='text-xs text-yellow-200'>As a teacher, teaching web-tech</span>
          </h1>
          {/* Location */}
          <h1 className='text-xl font-semibold'>
            Location &nbsp;
          <span className='text-xs text-yellow-200'>
            Kabul &nbsp;
            <span className='font-thin'>
             Afghanistan
            </span>
            </span>
          </h1>
          {/* type of job */}
          <h1 className='text-xl font-semibold'>
            Type of Job &nbsp;
          <span className='text-xs text-yellow-200'>Teacher</span>
          </h1>
          {/* date */}
          <h1>
            <h2 className='text-xl font-semibold'>
              From &nbsp; 
              <span className='text-xs text-yellow-200'>2016 &nbsp;</span> 
              <span className='text-sm'>To &nbsp;</span> 
              <span className='text-xs text-yellow-200'>2019</span>
            </h2>
          </h1>
      </div>

      </div>

      
      </motion.div> 
      </div>
    </section>
  )
}

export default Education