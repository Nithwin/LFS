import React from 'react'
import { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useNavigate } from 'react-router-dom';


const User = () => {
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [email,setEmail] = useState('');
  const navigate = useNavigate();
  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };
  const handleNavigate = ()=>{
    navigate("/user/dashboard");
  };

  return (
    <section className='flex items-center justify-center h-screen overflow-hidden bg-lightWhite'>
      <form action="" className='flex flex-col justify-center p-2 bg-purple-200 border-2 rounded-lg shadow-2xl w-96 h-80 backdrop-blur-[10px]'>
        <p className='px-4 mx-4 my-2 text-3xl font-bold text-center uppercase '>user login</p>
        <label className='relative pe-5 '>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}  className='w-full p-2 m-3 transition-all duration-200 bg-transparent border-b-2 border-black outline-none focus:border-purple-500' />
          <span  className={`absolute px-2 text-lg hover:cursor-text transition-all duration-200  left-2 text-opacity-80 top-4 input-text ${email.length>0 ? 'text-entered':''}`}>Email</span>
        </label>


        <label   className='relative pe-5'>
          <input type={type}  onChange={(e) => setPassword(e.target.value)} className='w-full p-2 m-3 transition-all duration-200 bg-transparent border-b-2 border-black outline-none focus:border-purple-500 ' />
          <span className={`absolute px-2 text-lg hover:cursor-text transition-all duration-200 left-2 text-opacity-80 top-4 input-text ${password.length>0 ? 'text-entered':''}`}>Password</span>
          <span  onClick={handleToggle}>
          <Icon className='absolute top-4 right-2' icon={icon} size={25} />
        </span>
        </label>


        <button onClick={handleNavigate} className='hover:[text-shadow:0px_0px_8px_#7d12ff] py-3 m-4 text-xl font-semibold text-white transition-all ease-in-out delay-100 bg-neonPurple rounded-3xl hover:bg-white hover:text-neonPurple hover:shadow-qw active:bg-purple-400 active:shadow-none active:text-black'>Login</button>
      </form>
    </section>
  )
}

export default User
