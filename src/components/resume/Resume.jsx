import React, {  useState } from 'react'
import Education from './Education';
import AboutMe from './AboutMe';
import {motion} from 'framer-motion';

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [aboutMeData, setAboutMeData] = useState(false);
  return (
    <section id="resume" className="w-full py-20  border-b-[5px] border-b-neutral-800 flex justify-center flex-col">
    
      <div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className=''
        >
        <ul className="w-full grid grid-cols-1 md:grid-cols-2  border-4 border-neutral-700 mb-3 py-3 px-3 shadow-neutral-600 shadow-lg">
          <li
            onClick={() =>
              setEducationData(true) &
              setAboutMeData(false)
            }
            className={`${
              educationData
                ? "border-2 border-neutral-700 bg-teal-500 py-1 rounded-lg text-center duration-1000"
                : "border-2 border-neutral-700 bg-neutral-500 py-1 rounded-lg text-center duration-1000"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setAboutMeData(true)
            }
            className={`${ aboutMeData? "border-2 border-neutral-700 bg-teal-500 py-1 rounded-lg text-center duration-1000"
                : "border-2 border-neutral-700 bg-neutral-500 py-1 rounded-lg text-center duration-1000"
            } resumeLi`}
          >
            About Me
          </li>
        </ul>           
        </motion.div>
      </div>
      {educationData && <Education />}
      {aboutMeData && <AboutMe />} 
    </section>
  );
}

export default Resume