import React from 'react'
import img from './contact.png';
const Contact = () => {
  return (

<section className="bg-darkPurple text-lightWhite rounded-3xl">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-evenly ">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={img} alt="" className="object-contain h-72 sm:h-80 lg:h-80 xl:h-112 2xl:h-128" />
		</div>


    <form className='flex flex-col items-center justify-center '>
    <div className='mt-10'>
      <p className='mb-3 text-4xl font-semibold'>Contact Us</p>

      </div>

    <div className='flex flex-col items-center justify-center '>
<div className='flex flex-col w-full'>
  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
  <input type="email" id="email" aria-describedby="helper-text-explanation" className="bg-lightWhite border border-gray-300 text-gray-700 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:w-64 w-56" placeholder="name@flowbite.com"/>
</div>

<div className='flex flex-col w-full'>
  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
  <input type="text" id="name" aria-describedby="helper-text-explanation" className="bg-lightWhite border border-gray-300 text-gray-700 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name"/>
</div>

<div className='flex flex-col w-full mt-5'>
  <textarea name="" className='flex w-full p-3 text-black resize-none rounded-xl' placeholder='Enter The Message'></textarea>
</div>

      <button className='w-full p-2 m-3 text-xl font-bold text-white transition-all ease-in-out delay-75 rounded-3xl bg-neonPurple hover:bg-white hover:text-neonPurple hover:shadow-qw'> Send Message</button>
    </div>
    </form>
	</div>
</section>



  )
}

export default Contact
