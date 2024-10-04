import React from 'react'
import { Link } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
const Header = () => {
  return (
    <header className=''>
      <nav>
        <nav className="">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-3 mx-auto bg-purple-200 rounded-lg">
            <div className='flex gap-2'>
              <IoPersonCircleOutline className='size-7 text-darkPurple '/>
              <span className="self-center text-lg font-semibold whitespace-nowrap">
                22026_Verbal
              </span>
            </div>
            <div className="flex items-center lg:order-2">
              <Link
                to="/"
                className="text-lightWhite rounded-lg text-sm px-4 lg:px-5 lg:py-3 mr-2  focus:outline-none bg-neonPurple font-medium hover:text-neonPurple hover:bg-lightWhite transition-all delay-100 ease-in-out hover:shadow-qw hover:[text-shadow:0px_0px_8px_#7d12ff] py-3">
                Submit Test </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center max-w-screen-xl p-2 mx-auto my-2 bg-gray-100 rounded-lg shadow-lg">
            <p className='flex items-center justify-center gap-1 font-semibold text-neonPurple'>
              <FaRegClock className='size-4'/>
              <span>123:32</span>
            </p>
          </div>
        </nav>
      </nav>
    </header>
  )
}

export default Header

