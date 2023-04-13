import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactLeft from './ContactLeft';
import {motion} from 'framer-motion';


const initialState = {
  user_name:'',
  user_phone:'',
  user_email:'',
  message:''
}

const Contacts = () => {
  const form = useRef();
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState(false); 
  const [formData, setFormData] = useState(initialState);

  const {user_name, user_phone, user_email, message} = formData;

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(user_email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const onChangeHandler = (e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
 }


  const sendEmail = (e) => {
    e.preventDefault();

    if(!user_name || !user_phone || !user_email || ! message){
      setErrMsg(true)
    }else{

      emailjs.sendForm('service_nmxq03f', 'template_wewajyd', form.current, 'yrrILUUKr92qCpQbV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setSuccessMsg(
        `Thank you dear ${user_name}, Your Messages has been sent Successfully!`
      );

      setFormData(initialState);
      setErrMsg(false);
      setTimeout(() => {
        setSuccessMsg('')
      }, 2000);
    } 
  };
  



  return (
    <div id='contacts' className='w-full grid grid-cols-1 md:grid-cols-2 py-16 gap-4  border-b-[5px] border-b-neutral-800'>
      {/* left side */}
      <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x:0 },
      }}
      className=''>
        <ContactLeft/>
      </motion.div> 

      {/* right side */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x:0 },
      }}
      className='w-full bg-zinc-900 rounded-xl h-fit items-center justify-center border-4 border-neutral-700 py-11'>
      

      <form 
      className='flex flex-col rounded-xl h-full justify-center '
      ref={form} onSubmit={sendEmail}>
       {/* right side title */}
      <div className='px-4 text-2xl font-playfair'>
        <h1>Feel free to contact me!</h1> 
      </div> 
      
      <div className='flex flex-col px-2 py-2 relative'>
        <label className='px-2 text-yellow-400'>Name</label>
        <input 
        type="text" 
        name="user_name" 
        value={user_name}
        onChange={onChangeHandler}
        className='text-black border-4 outline-none px-2 border-neutral-900 rounded-xl py-1'
        />
        {errMsg && user_name.length <=0 ? <p className='absolute bottom-[16px] right-5 italic text-red-400'>Name is required</p> : ''}
      </div>  
      
      <div className='flex flex-col px-2 py-2 relative'>
      <label className='px-2 text-yellow-400'>Phone</label>
      <input 
      className='text-black border-4 outline-none px-2 border-neutral-900 rounded-xl py-1' 
      type="text" 
      value={user_phone} 
      onChange={onChangeHandler} 
      name="user_phone"
      />
      {errMsg && user_phone.length <=0 ? <p className='absolute bottom-[16px] right-5 italic text-red-400'>Phone is required</p> : ''}
      </div>

      <div className='flex flex-col px-2 py-2 relative'>
      <label className='px-2 text-yellow-400'>Email</label>
      <input 
      className='text-black border-4 outline-none px-2 border-neutral-900 rounded-xl py-1'
      type="email" 
      value={user_email} 
      onChange={onChangeHandler} 
      name="user_email"/>
      {errMsg && user_email.length <=0 ? <p className='absolute bottom-[16px] right-5 italic text-red-400'>Email is required</p> : ''}
      </div> 

      <div className='flex flex-col px-2 py-2 relative'>
      <label className='px-2 text-yellow-400'>Message</label>
      <textarea 
      className='text-black border-4 outline-none px-2 border-neutral-900 rounded-xl py-1'
      value={message} 
      onChange={onChangeHandler} 
      name="message" />
      {errMsg && message.length <=0 ? <p className='absolute bottom-[16px] right-5 italic text-red-400'>Message is required</p> : ''}
      </div>

      <div className='px-2'>
        <button type='submit' className='border-2 border-neutral-700 py-1  w-full rounded-xl mt-2 text-yellow-400'>Send</button>
      </div>
      <p className='text-green-600'>{successMsg}</p>
    </form>
      </motion.div>
      
    </div>
  );
};


export default Contacts