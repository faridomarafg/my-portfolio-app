import {motion} from 'framer-motion';

const javaScriptLogo = 'https://academyclass.com/wp-content/uploads/2021/10/Javascript.png';
const nodeJsLogo = 'https://icon-library.com/images/node-js-icon/node-js-icon-2.jpg';
const expressLogo = 'https://www.shutterstock.com/image-vector/ex-letters-four-colors-abstract-260nw-417449110.jpg';
const mogoDBLogo = 'https://assets.website-files.com/6194c620b350c4056027fac7/62f4d43c3eac4d1d01e6e038_mongodb-atlas-logo.png';
const reactjsLogo = 'https://ionicframework.com/docs/icons/logo-react-icon.png';
const cssLogo = 'https://img.freepik.com/premium-vector/css-logo-design_731343-114.jpg';
const tailwindCssLogo = 'https://d6f6d0kpz0gyr.cloudfront.net/uploads/images/_1200x630_crop_center-center_82_none/tailwind-thumb.jpg?mtime=1609771799';

function Features() {
  return (
    <div id='skills' 
    className='h-fit w-full flex flex-col items-center justify-center pt-10  border-b-[5px] border-b-neutral-800 pb-10 relative'>
      {/* header */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5 }}
      variants={{
        hidden: { opacity: 0, },
        visible: { opacity: 1,},
      }}
      >
        <h1 className=' text-[30px] sm:text-6xl md:text-6xl font-extrabold font-playfair text-teal-600'>Skills</h1>
      </motion.div>

      {/* skils section */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 2 }}
      variants={{
        hidden: { opacity: 0, y:-50},
        visible: { opacity: 1, y:0},
      }}
      className='w-fit pt-10  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4'
      >
        <div className='flex flex-col pb-3 px-4  ms:px-6 md:px-8 items-center rounded-full hover:scale-105 duration-1000'>
          <img 
          src={javaScriptLogo} 
          alt="skillImage" 
          className='w-[75px] h-[75px] sm:w-[120px] sm:h-[120px]  md:w-[120px] md:h-[120px] object-cover border-2 border-x-neutral-900 p-1 shadow-md shadow-yellow-100 rounded-full'
          />
          <h1 className='text-center text-[13px] md:text-xl  pt-2'>Java script</h1>
        </div>
        
        <div className='flex flex-col pb-3 px-4  ms:px-6 md:px-8 items-center rounded-full hover:scale-105 duration-1000'>
          <img 
          src={nodeJsLogo} 
          alt="skillImage" 
          className='w-[75px] h-[75px] sm:w-[120px] sm:h-[120px]  md:w-[120px] md:h-[120px] object-cover border-2 border-x-neutral-900 p-1 shadow-md shadow-yellow-100 rounded-full'
          />
          <h1 className='text-center text-[13px] md:text-xl  pt-2'>Node js</h1>
        </div>

        <div className='flex flex-col pb-3 px-4  ms:px-6 md:px-8 items-center rounded-full hover:scale-105 duration-1000'>
          <img 
          src={expressLogo} 
          alt="skillImage" 
          className='w-[75px] h-[75px] sm:w-[120px] sm:h-[120px]  md:w-[120px] md:h-[120px] object-cover border-2 border-x-neutral-900 p-1 shadow-md shadow-yellow-100 rounded-full'
          />
          <h1 className='text-center text-[13px] md:text-xl  pt-2'>Express js</h1>
        </div>

        <div className='flex flex-col pb-3 px-4  ms:px-6 md:px-8 items-center rounded-full hover:scale-105 duration-1000'>
          <img 
          src={mogoDBLogo} 
          alt="skillImage" 
          className='w-[75px] h-[75px] sm:w-[120px] sm:h-[120px]  md:w-[120px] md:h-[120px] object-cover border-2 border-x-neutral-900 p-1 shadow-md shadow-yellow-100 rounded-full'
          />
          <h1 className='text-center text-[13px] md:text-xl  pt-2'>Mogo DB</h1>
        </div>

        <div className='flex flex-col pb-3 px-4  ms:px-6 md:px-8 items-center rounded-full hover:scale-105 duration-1000'>
          <img 
          src={reactjsLogo} 
          alt="skillImage" 
          className='w-[75px] h-[75px] sm:w-[120px] sm:h-[120px]  md:w-[120px] md:h-[120px] object-cover border-2 border-x-neutral-900 p-1 shadow-md shadow-yellow-100 rounded-full'
          />
          <h1 className='text-center text-[13px] md:text-xl  pt-2'>React.js</h1>
        </div>

        <div className='flex flex-col pb-3 px-4  ms:px-6 md:px-8 items-center rounded-full hover:scale-105 duration-1000'>
          <img 
          src={cssLogo} 
          alt="skillImage" 
          className='w-[75px] h-[75px] sm:w-[120px] sm:h-[120px]  md:w-[120px] md:h-[120px] object-cover border-2 border-x-neutral-900 p-1 shadow-md shadow-yellow-100 rounded-full'
          />
          <h1 className='text-center text-[13px] md:text-xl  pt-2'>CSS</h1>
        </div>

        <div className='flex flex-col pb-3 px-4  ms:px-6 md:px-8 items-center rounded-full hover:scale-105 duration-1000'>
          <img 
          src={tailwindCssLogo} 
          alt="skillImage" 
          className='w-[75px] h-[75px] sm:w-[120px] sm:h-[120px]  md:w-[120px] md:h-[120px] object-cover border-2 border-x-neutral-900 p-1 shadow-md shadow-yellow-100 rounded-full'
          />
          <h1 className='text-center text-[13px] md:text-xl  pt-2'>Tailwind CSS</h1>
        </div>

      </motion.div> 

    </div>
  )
}

export default Features