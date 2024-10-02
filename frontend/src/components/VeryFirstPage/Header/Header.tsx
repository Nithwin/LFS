import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import './styles.css';
const Header = () => {
  const [isOpen,setOpen] = useState(false);
  const [content,setContent] = useState('hidden');
  const [icon,setIcon] = useState(<RxCross2 />);
  return (
    <header className='mb-1 sticky-top ladingPageHeader'>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-darkPurple rounded-3xl text-white lg:py-4">
        <div className="relative flex flex-wrap items-center justify-between max-w-screen-xl mx-auto ">
            <p  className='mx-2 text-sm sm:text-4xl'>Linglee</p>
            <div className="flex items-center lg:order-2">
                <NavLink to={"/admin-login"} className={`${'px-3 py-2 mx-3 border-2 bg-neonPurple font-bold border-transparent hover:bg-white transition-all delay-100 ease-in hover:shadow-qw rounded-3xl hover:border-neonPurple hover:text-neonPurple hover:[text-shadow:0px_0px_8px_#7d12ff]'}`}>Admin</NavLink>
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false"

                onClick={()=> {
                  (content === 'hidden') ? setContent('absolute bg-black rounded-3xl p-3 ') : setContent('hidden');
                }
                }>

                <RiMenu3Fill className='text-white size-5'/>
                </button>
            </div>
            <div className={`w-full top-[100%] items-center justify-between ${content} lg:flex lg:w-auto lg:order-1" id="mobile-menu-2`}>
                <ul className="flex flex-col mt-4 font-medium gap-7 lg:flex-row lg:space-x-8 lg:mt-0">
                    <li className=''>
                      <NavLink  to={"/"} className={` inline-block py-2 pl-3 pr-4 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white landingPageEffect` }>
                        <p className='text-sm sm:text-lg md:text-lg lg:text-2xl'>Home</p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/contact"} className={`inline-block py-2 pl-3 pr-4 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white landingPageEffect`}>
                      <p className='text-sm sm:text-lg md:text-lg lg:text-2xl'>Contact</p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/about"} className={`inline-block py-2 pl-3 pr-4 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white landingPageEffect`}>
                      <p className='text-sm sm:text-lg md:text-lg lg:text-2xl'>About</p></NavLink>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header;
