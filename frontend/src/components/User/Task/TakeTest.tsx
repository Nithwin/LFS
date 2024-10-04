import React,{useState} from 'react'
import { GiSpellBook } from "react-icons/gi";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import Progress from './Progress';
import { Link } from 'react-router-dom';
const TakeTest = () => {
  const [Course,SetCourse] = useState("hidden");
  const [Icon,setIcon] = useState(<FaAngleDown className='text-gray-600 size-5'/>)
  const ChangeIcons = ()=>{
    if(Course === "hidden"){
      SetCourse("block");
      setIcon(<FaAngleUp className='text-gray-600 size-5'/>);
    }
    else{
      SetCourse("hidden");
      setIcon(<FaAngleDown className='text-gray-600 size-5'/>);
    }
  }
  return (
    <main className="h-auto pt-20 shadow-xl md:ml-64">
      <div className="p-4 mb-4 bg-purple-200 rounded-lg shadow-lr lg:flex lg:justify-between lg:px-5" >
        <div className='flex items-center gap-3' >
          <div className='inline-block p-1 shadow-lg rounded-xl bg-neonPurple'>
            <GiSpellBook className='text-lightWhite size-6'/>
          </div>
          <div>
            <p className='inline-block text-sm font-semibold whitespace-nowrap lg:text-xl'>
            2026 Course Title and Course ID
            </p>
         </div>
        </div>
        <div>
          <div className='flex flex-row items-center gap-2 lg:w-80 '>
            <div  className="w-full h-2 gap-2 my-4 bg-gray-400 rounded-full lg:my-6" >
              <div className="h-2 rounded-full bg-neonPurple" style={{"width":"45%"}}></div>
            </div>
            <div className='text-sm font-semibold'><span>45</span>%</div>
          </div>
        </div>



      </div>

      <div className='lg:flex lg:flex-row lg:h-80 '>


        <div className='p-4 py-6 mb-4 rounded-lg shadow-lr lg:flex lg:justify-between lg:px-5 lg:flex-col lg:w-3/5'>
          <div className='flex items-center justify-between gap-3 p-3 bg-gray-200 cursor-pointer rounded-xl' onClick={() =>ChangeIcons()}>
            <div className='flex items-center gap-2 '>
              <div className='flex bg-'>
               {Icon}
              </div>
              <p>Assessment</p>
            </div>

            <div className='flex items-center w-10 h-10'>
              <span>
                <Progress percentage={45}/>
              </span>
            </div>

          </div>


          <div className={`${Course} p-2`}>
            <ul>
              <li>
                <Link to={`/`}  className='flex flex-col p-2 mt-3 bg-purple-100 rounded-lg'>
                  <p className='font-semibold '>
                    1. 2026 Course Title and Course ID
                  </p>
                  <p className='flex justify-between mt-2'>
                    <div className='text-sm text-gray-600'>Start: <span>26 Sep 24 </span></div>
                    <div className='text-sm text-gray-600'>Start: <span>26 Sep 24 </span></div>
                  </p>
                </Link>
              </li>

              <li>
                <Link to={`/`}  className='flex flex-col p-2 mt-3 bg-purple-100 rounded-lg'>
                  <p className='font-semibold '>
                    2. 2026 Course Title and Course ID
                  </p>
                  <p className='flex justify-between mt-2'>
                    <div className='text-sm text-gray-600'>Start: <span>26 Sep 24 </span></div>
                    <div className='text-sm text-gray-600'>Start: <span>26 Sep 24 </span></div>
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='p-4 py-6 mb-4 rounded-lg shadow-lr lg:flex lg:justify-between lg:px-5 lg:flex-col lg:w-full '>
          <div className='flex items-center justify-between p-2 text-xl bg-purple-200 rounded-lg'>
            <p className='font-semibold '>Course Title and Course ID</p>
            <Link to={`/test`} className='p-2 px-3 font-semibold transition-all ease-out delay-100 bg-neonPurple rounded-3xl text-lightWhite hover:opacity-90 hover:shadow-qw hover:bg-lightWhite hover:text-lightPurple'>Take Test</Link>
          </div>

          <div className='mt-3'>
            <p className='py-2 font-bold text-center bg-purple-100 rounded-lg'>Total</p>
            <div className='p-2 mt-2 bg-gray-100 rounded-lg'>
              <div className='flex justify-between my-2 col'>
                <p>Questions</p>
                <p>1</p>
              </div>

              <div className='flex justify-between my-2 col'>
                <p>Duration (min) </p>
                <p>30</p>
              </div>

              <div className='flex justify-between my-2 col'>
                <p>Marks</p>
                <p>100</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default TakeTest
