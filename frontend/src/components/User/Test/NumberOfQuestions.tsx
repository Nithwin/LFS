import React from 'react'

const NumberOfQuestions = () => {
  return (
    <div className='flex flex-col justify-between p-2 bg-gray-200 lg:flex-col rounded-xl'>
        <div className='grid grid-cols-2 p-2 py-2 rounded-lg lg:w-24'>
          <span className='px-3 py-2 m-1 bg-blue-200 rounded-lg '>1</span>
          <span className='px-3 py-2 m-1 bg-blue-200 rounded-lg' >2</span>
          <span className='px-3 py-2 m-1 bg-blue-200 rounded-lg' >3</span>
          <span className='px-3 py-2 m-1 bg-blue-200 rounded-lg' >4</span>
          <span className='px-3 py-2 m-1 bg-blue-200 rounded-lg' >5</span>
          <span className='px-3 py-2 m-1 bg-blue-200 rounded-lg' >6</span>
        </div>

        <div className='flex flex-row justify-between p-2 py-4 rounded-lg lg:w-24 bg-lightWhite lg:flex-col'>

          <div className='w-20'>
            <p className='text-[11px] font-medium text-center'>Answered</p>
            <p className='text-xs font-medium text-center'><span>1</span>/<span>10</span></p>
            <hr className='h-1 my-2 bg-black rounded-full'/>
          </div>
          <div className='w-20'>
            <p className='text-[11px] font-medium text-center'>Skipped</p>
            <p className='text-xs font-medium text-center'><span>1</span>/<span>10</span></p>
            <hr className='h-1 my-2 bg-orange-500 rounded-full'/>
          </div>

          <div className='w-20'>
            <p className='text-[11px] font-medium text-center'>Not Viewed</p>
            <p className='text-xs font-medium text-center'><span>1</span>/<span>10</span></p>
            <hr className='h-1 my-2 bg-blue-500 rounded-full'/>
          </div>

          <div className='w-20'>
            <p className='text-[11px] font-medium text-center'>Saved in server</p>
            <p className='text-xs font-medium text-center'><span>1</span>/<span>10</span></p>
            <hr className='h-1 my-2 bg-green-500 rounded-full'/>
          </div>





        </div>
      </div>
  )
}

export default NumberOfQuestions
