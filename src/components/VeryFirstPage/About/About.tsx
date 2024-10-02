import React from 'react'
import luffy from './luffy.jpg'
import TeamCarousel from './TeamCarousel'
const About = () => {
  return (


<section className="bg-darkPurple text-lightWhite rounded-3xl">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-evenly ">
	<div className="flex flex-col items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
		<div className='ms-5'>
			<p className='my-3 text-4xl font-bold'>About Us</p>
			<div className='w-full lg:w-1/2'>
			<p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, dolores natus recusandae
					alias ducimus ratione facere soluta ea architecto rerum nihil facilis, reiciendis maiores quasi magni! Dolor temporibus voluptatum ad.</p>
			</div>
		</div>


	</div>

		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<TeamCarousel/>
		</div>


	</div>
</section>

  )
}

export default About

