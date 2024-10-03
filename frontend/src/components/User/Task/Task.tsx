import { get } from 'http';
import React from 'react'
import { LuClipboardList } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from 'react-router-dom';
const Task = () => {
  const BoxStyles = [
    ["Assessment",<LuClipboardList className='text-blue-600 size-6'/>,1],
    ["Practice Test",<LuClipboardList className='text-blue-600 size-6'/>,1],
    ["Start Date",<MdOutlineDateRange className='text-blue-600 size-6'/>,'13 Nov, 24'],
    ["End Date",<MdOutlineDateRange className='text-blue-600 size-6'/>,'26 Sep, 25']
  ]
  const getElement = ( a:any) => {
    return (
        <div className="flex items-center my-4">
            <div>
            {BoxStyles[a][1]}
            </div>
            <div className="ms-1">
                <p className="text-sm font-semibold">
                    <span>{BoxStyles[a][2]}</span>
                </p>
                <p className="text-sm">{BoxStyles[a][0]}</p>
            </div>
        </div>
    );
};

  let Courses = [];
  for(let i = 0;i<4;i++){
      Courses.push(
      <Link to={'/user/task/test'} className="rounded-2xl p-2 shadow-lr lg:p-3 lg:w-[26rem] lg:h-[15rem] hover:scale-105 ease-out delay-100 transition-all my-4" >
      <p className='text-lg font-bold lg:text-2xl'>2026 Course Title and Course ID</p>

      <div  className="w-full h-2 my-4 bg-gray-400 rounded-full lg:my-6" >
        <div className="h-2 rounded-full bg-neonPurple" style={{"width":"45%"}}></div>
      </div>

      <div className='flex flex-row justify-between'>
        <div className=''>
        {getElement(0)}
        {getElement(1)}
        </div>

        <div className=''>
        {getElement(2)}
        {getElement(3)}
        </div>
        </div>
    </Link>
      );
  }



  return (

<main className="h-auto p-4 pt-20 md:ml-64">
      <p className='mb-3 text-3xl font-bold'>My Tasks</p>
    <div className="grid mb-4 lg:grid lg:gap-5 lg:grid-cols-2 " >
      {Courses}
</div>
  </main>
  )
}

export default Task

{
  /*
  <div className="p-2 rounded-lg shadow-lr lg:p-3 lg:w-[26rem] lg:h-[15rem] my-4" >
        <p className='text-lg font-bold lg:text-2xl'>2026 Course Title and Course ID</p>

        <div  className="w-full h-2 my-4 bg-gray-400 rounded-full lg:my-6" >
          <div className="h-2 rounded-full bg-neonPurple" style={{"width":"45%"}}></div>
        </div>

        <div className='flex flex-row justify-between'>
          <div className=''>
            <div className='flex items-center my-3'>
              <div>
              <LuClipboardList className='text-blue-600 size-6'/>
              </div>
              <div className='ms-1'>
                <p className='text-sm font-semibold'><span>1</span></p>
                <p className='text-sm'>Assessment </p>
              </div>
          </div>

          <div className='flex items-center my-3'>
            <div>
            <LuClipboardList className='text-blue-600 size-6'/>
            </div>
            <div className='ms-1'>
              <p className='text-sm font-semibold'><span>1</span></p>
              <p className='text-sm'>Practice test </p>
            </div>
          </div>
          </div>

          <div className=''>
            <div className='flex items-center my-3'>
              <div>
              <MdOutlineDateRange className='text-blue-600 size-6'/>
              </div>
              <div className='ms-1'>
                <p className='text-sm font-semibold'><span>13 Nov, 24</span></p>
                <p className='text-sm'>Start Date </p>
              </div>
            </div>

            <div className='flex items-center my-3 '>
              <div>
                <MdOutlineDateRange className='text-blue-600 size-6'/>
              </div>
                <div className='ms-1'>
                  <p className='text-sm font-semibold'><span>26 Sep, 25</span></p>
                  <p className='text-sm'>End Date </p>
              </div>
            </div>
          </div>






        </div>
      </div>

      <div className="p-2 rounded-lg shadow-lr lg:p-3 lg:w-[26rem] lg:h-[15rem]" >
        <p className='text-lg font-bold lg:text-2xl'>2026 Course Title and Course ID</p>

        <div  className="w-full h-2 my-4 bg-gray-400 rounded-full lg:my-6" >
          <div className="h-2 rounded-full bg-neonPurple" style={{"width":"45%"}}></div>
        </div>

        <div className='flex flex-row justify-between'>
          <div className=''>
            <div className='flex items-center my-3'>
              <div>
              <LuClipboardList className='text-blue-600 size-6'/>
              </div>
              <div className='ms-1'>
                <p className='text-sm font-semibold'><span>1</span></p>
                <p className='text-sm'>Assessment </p>
              </div>
          </div>

          <div className='flex items-center my-3'>
            <div>
            <LuClipboardList className='text-blue-600 size-6'/>
            </div>
            <div className='ms-1'>
              <p className='text-sm font-semibold'><span>1</span></p>
              <p className='text-sm'>Practice test </p>
            </div>
          </div>
          </div>

          <div className=''>
            <div className='flex items-center my-3'>
              <div>
              <MdOutlineDateRange className='text-blue-600 size-6'/>
              </div>
              <div className='ms-1'>
                <p className='text-sm font-semibold'><span>13 Nov, 24</span></p>
                <p className='text-sm'>Start Date </p>
              </div>
            </div>

            <div className='flex items-center my-3 '>
              <div>
                <MdOutlineDateRange className='text-blue-600 size-6'/>
              </div>
                <div className='ms-1'>
                  <p className='text-sm font-semibold'><span>26 Sep, 25</span></p>
                  <p className='text-sm'>End Date </p>
              </div>
            </div>
          </div>






        </div>
      </div>

      <div className="p-2 rounded-lg shadow-lr lg:p-3 lg:w-[26rem] lg:h-[15rem]" >
        <p className='text-lg font-bold lg:text-2xl'>2026 Course Title and Course ID</p>

        <div  className="w-full h-2 my-4 bg-gray-400 rounded-full lg:my-6" >
          <div className="h-2 rounded-full bg-neonPurple" style={{"width":"45%"}}></div>
        </div>

        <div className='flex flex-row justify-between'>
          <div className=''>
            <div className='flex items-center my-3'>
              <div>
              <LuClipboardList className='text-blue-600 size-6'/>
              </div>
              <div className='ms-1'>
                <p className='text-sm font-semibold'><span>1</span></p>
                <p className='text-sm'>Assessment </p>
              </div>
          </div>

          <div className='flex items-center my-3'>
            <div>
            <LuClipboardList className='text-blue-600 size-6'/>
            </div>
            <div className='ms-1'>
              <p className='text-sm font-semibold'><span>1</span></p>
              <p className='text-sm'>Practice test </p>
            </div>
          </div>
          </div>

          <div className=''>
            <div className='flex items-center my-3'>
              <div>
              <MdOutlineDateRange className='text-blue-600 size-6'/>
              </div>
              <div className='ms-1'>
                <p className='text-sm font-semibold'><span>13 Nov, 24</span></p>
                <p className='text-sm'>Start Date </p>
              </div>
            </div>

            <div className='flex items-center my-3 '>
              <div>
                <MdOutlineDateRange className='text-blue-600 size-6'/>
              </div>
                <div className='ms-1'>
                  <p className='text-sm font-semibold'><span>26 Sep, 25</span></p>
                  <p className='text-sm'>End Date </p>
              </div>
            </div>
          </div>






        </div>
      </div>
    </div>
  */
}
