import React from 'react'
import { CgProfile } from "react-icons/cg";
import Analytics from './images/analytic.png';
import profile from './images/profile.jpg'
const Home = () => {
  return (
<main className="h-auto pt-20 md:ml-64">

    <div className="p-4 mb-4 rounded-lg shadow-lr dark:border-gray-60" >
        <p className='mb-5 text-4xl font-semibold text-center lg:text-5xl'>Welcome <span>Nithwin V M</span> !</p>
        <div className=''>
          <div className='mb-3 border-4 rounded-full shadow-lg border-neonPurple bg-lightWhite h-28 w-28' >
          <img src={profile} alt="" className='rounded-full'/>
            </div>
          <p className='text-lg font-bold'><span>Nithwin V.M</span></p>
          <p>22cs055@nandhengg.org</p>
          <p className='space-x-3 d-flex'>
            <span className='border-r-2 border-gray-500 pe-5 '>Register No: <span>22cs055</span></span>
            <span className='border-r-2 border-gray-500 pe-5 '>Degree: <span>B.E CSE</span></span>
            <span >Batch: <span>2026</span></span>
          </p>
        </div>

    </div>

    <div className="h-64 mb-0 rounded-lg shadow-lg dark:border-gray-60" />

  </main>
  )
}

export default Home


// <div className='flex flex-col justify-between px-5 pb-10 w-svw'>
// <div className='flex flex-row items-center justify-between space-x-10 ms-10'>
//   <div>
//   <p className='p-3 text-3xl font-bold text-white bg-darkPurple rounded-3xl'>Dashboard</p>
//   </div>

// <div className=''>
// <CgProfile className='size-12'/>
// </div>

// </div>

// <div className='my-4 text-3xl font-semibold text-center me-10' >
//     <p >Welcome Back?</p>
//     <p>Nithwin V M</p>

// </div>


// <div className='flex items-center justify-center p-5'>
//   <img src={Analytics}  />
// </div>

// <div className='flex justify-center' >
//   <p className='p-5 font-semibold rounded-3xl bg-darkPurple text-lightWhite '>Yet to be completed</p>
// </div>
// </div>
