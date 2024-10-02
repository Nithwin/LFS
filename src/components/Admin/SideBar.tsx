import React from 'react'
import { MdDashboard } from "react-icons/md";
import { MdTaskAlt } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { NavLink, } from 'react-router-dom';
const SideBar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-52 h-screen pt-14 transition-transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } bg-white border-r border-gray-200 md:translate-x-0 dark:bg-darkPurple dark:border-bluebg-blue-700`}
      aria-label="Sidenav"
      id="drawer-navigation"
    >
    <div className="flex flex-col justify-between h-full px-3 py-5 overflow-y-auto bg-white dark:bg-darkPurple">

      <ul className="space-y-8">
        <li>
            <NavLink to={'/admin/'} className="flex items-center p-2 ml-3 space-x-3 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-blue-700 group">
              <MdDashboard className='text-white size-5'/>
              <span>Dashboard</span>
            </NavLink>
        </li>


        <li>
          <NavLink to={'/admin/task'} className="flex items-center p-2 ml-3 space-x-3 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-blue-700 group">
            <MdTaskAlt className='text-white size-5'/>
            <span>Tasks</span>
          </NavLink>
        </li>

        <li>
          <NavLink to={'/admin/learn'} className="flex items-center p-2 ml-3 space-x-3 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-blue-700 group">
            <FaBookReader className='text-white size-5'/>
            <span>Learning Plan</span>
          </NavLink>
        </li>


        <li>
          <NavLink to={'/admin/faculty'} className="flex items-center p-2 ml-3 space-x-3 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-blue-700 group">
            <FaChalkboardTeacher className='text-white size-5'/>
            <span>Faculty</span>
          </NavLink>
        </li>


      </ul>

      <ul className="justify-center pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-bluebg-blue-700 d-flex">
      <li className='justify-center d-flex'>
        <NavLink to={'/'} className='px-3 py-2 border-2 bg-neonPurple font-bold border-transparent hover:bg-white transition-all delay-100 ease-in hover:shadow-qw rounded-3xl hover:border-neonPurple hover:text-neonPurple hover:[text-shadow:0px_0px_8px_#7d12ff] flex justify-center text-white'><span>Logout</span></NavLink>
      </li>

      </ul>
    </div>
  </aside>
  )
}

export default SideBar



// import React,{useState} from 'react'
// import { RiMenu3Fill } from "react-icons/ri";
// import { NavLink } from 'react-router-dom';
// import { MdTaskAlt } from "react-icons/md";
// import { GiCrystalGrowth } from "react-icons/gi";
// import { MdGroups } from "react-icons/md";
// import { RxDashboard } from "react-icons/rx";

// const SideBar = () => {
//   const sideMenu = [
//     {
//     icon:<RxDashboard className='size-6'/>,
//     label:"Dashboard",
//     path:"/user/"
//     }
//     ,{
//       icon:<MdTaskAlt className='size-6 '/>,
//     label:"Task",
//     path:"/user/task"
//     },
//     {
//       icon: <GiCrystalGrowth className='size-6'/> ,
//       label:"Learning",
//       path:"/user/learning"
//     },
//     {
//       icon:<MdGroups className='size-6'/> ,
//       label:"Faculty",
//       path:"/user/faculty"
//     }
//   ]

//   const renderSideMenu = sideMenu.map((i)=>(
//                     <li >
//                     <NavLink to={i.path} className='flex flex-col items-center justify-center'>
//                     {i.icon}
//                     <p  className='text-lg'>{i.label}</p>
//                     </NavLink>
//                   </li>
//   ))

//   const mobileSideMenu = sideMenu.map((i)=>(
//     <li className='' >
//     <NavLink to={i.path} className='flex flex-col items-center justify-center '>
//     {i.icon}
//     <p  className='text-xl'>{i.label}</p>
//     </NavLink>
//   </li>
// ))


//   const [Menu,SetMenu] = useState(false);
//   console.log(Menu);

//   return (
//     <div className={`me-5 fixed top-0 left-0   md:relative md:bg-darkPurple md:rounded-3xl md:text-lightWhite md:p-5 md:justify-between md:m-0`}>

//       <nav className={`flex flex-col justify-between h-screen pb-28 md:hidden  ${Menu? '':'bg-darkPurple text-white'}  p-5 md:rounded-3xl`}>
//         <div className='flex '>
//           <RiMenu3Fill className='size-10 ' onClick={() => SetMenu(Menu ? false : true)}/>
//           <p className={`text-3xl ms-4 ${Menu? 'hidden':'block'}`}>Linglee</p>
//         </div>

//         <ul className={`space-y-11 ${Menu? 'hidden':'block'}`}>
//         {mobileSideMenu}
//         </ul>

//       <div>
//          <NavLink to={"/"} className={`px-10 py-3 text-xl font-bold transition-all ease-in-out delay-75 rounded-full bg-neonPurple hover:bg-white hover:text-neonPurple hover:shadow-qw sm:px-16 sm:py-5 ${Menu? 'hidden':'block'}`}>Logout</NavLink>
//       </div>

//       </nav>


//       <nav className='hidden md:justify-between md:items-center md:flex md:flex-col md:h-full' >

//           <p className='text-2xl font-semibold '>Linglee</p>
//           <div>
//           <ul className='space-y-10 '>
//             {renderSideMenu}
//           </ul>
//           </div>
//           <div className='flex justify-end'>
//           <NavLink to={'/'} className='px-5 py-3 text-xl font-semibold text-white transition-all ease-in-out delay-100 bg-neonPurple rounded-3xl hover:bg-white hover:text-neonPurple hover:shadow-qw active:bg-purple-400 active:shadow-none active:text-black'>Logout</NavLink>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default SideBar

