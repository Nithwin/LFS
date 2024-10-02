import React from 'react'
import { Link } from 'react-router-dom'
import img from './read.png';
const Home = () => {
  return (
    <section className="bg-darkPurple rounded-3xl text-lightWhite">
	<div className="container flex flex-col justify-center mx-auto sm:py-12 lg:flex-row lg:justify-evenly lg:px-4">
		<div className="flex flex-col items-center justify-center py-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-center lg:p-0">
			<p className="mt-4 text-2xl font-bold leading-none uppercase sm:text-3xl">Language
      <span className='text-purple-500 '> Fusion </span>
      System
			</p>
			<p className="mt-6 mb-8 text-lg sm:mb-12">
        One solutions for all students needs
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
      <div className='my-10 lg:my-0'>
             <Link to='/user-login' className='px-10 py-3 text-xl font-bold transition-all ease-in-out delay-75 rounded-full bg-neonPurple hover:bg-white hover:text-neonPurple hover:shadow-qw sm:px-16 sm:py-5 hover:[text-shadow:0px_0px_8px_#7d12ff]'>Login</Link>

          </div>
			</div>
		</div>

		<div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 lg:pe-6">
			<img src={img} alt="" className="object-contain rounded-full h-72 sm:h-80 lg:h-80 xl:h-96 2xl:h-120" />
		</div>
	</div>
</section>

  )
}

export default Home

/*



<section className='flex justify-center h-[92vh] text-lightWhite bg-darkPurple rounded-3xl sm:h-full lg:rounded-full lg:h-full lg:items-center '>
      <section className='flex flex-col justify-evenly lg:flex-row-reverse lg:my-24 lg:items-center lg:justify-center'>

        <div className='flex items-center justify-center'>
          <img src={img} alt="image" className='rounded-full h-72 lg:h-80' />
        </div>

        <div className='flex flex-col items-center justify-center lg:mb-0'>
          <p className='my-3 text-2xl font-bold uppercase sm:text-4xl'>Language <span className='text-purple-500'>Fusion </span> System</p>
          <p className='my-2 sm:text-xl'>One solutions for all students needs</p>
          <div className='my-10'>
             <Link to='/user-login' className='px-10 py-3 text-xl font-bold transition-all ease-in-out delay-75 rounded-full bg-neonPurple hover:bg-white hover:text-neonPurple hover:shadow-qw sm:px-16 sm:py-5 hover:[text-shadow:0px_0px_8px_#7d12ff]'>Login</Link>

          </div>
        </div>

      </section>
    </section>

*/
