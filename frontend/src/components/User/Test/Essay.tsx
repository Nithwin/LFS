import React,{useState} from 'react'
import NumberOfQuestions from './NumberOfQuestions';
import { GrFormPrevious } from "react-icons/gr";
const Essay = () => {
  const [content,setContent] = useState("");
  return (
    <main className='flex flex-col-reverse gap-1 lg:flex-row '>
      <NumberOfQuestions/>

    <section className="flex flex-col-reverse py-3 bg-purple-100 rounded-lg lg:pt-5 lg:flex-col">
      <div className="grid max-w-screen-xl px-4 py-3 mx-auto bg-purple-100 rounded-lg xl:gap-0 lg:grid-cols-12 lg:py-4">
        <div className="px-2 mr-auto lg:col-span-6 lg:px-[5px] flex flex-col justify-between">
          <div>
          <h1 className="max-w-2xl mb-4 text-2xl font-semibold leading-none tracking-tight ">
            Essay Writing
          </h1>
          <p className="max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
          1.Write an essay about the impact of social media on interpersonal relationships.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:mt-0 lg:col-span-6 lg:flex">
          <div className='w-full p-3 rounded-lg h-96 lg:w-full bg-darkPurple'>
            <div className='flex flex-col w-full h-full'>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white " >
                Your Answer
              </label>
              <textarea id='EmailContent'
                className="block p-2.5 w-full text-lightWhite rounded-xl bg-gray-800 text-lg h-full resize-none overflow-auto"
                placeholder="Write your thoughts here..."
                defaultValue={""} value={content}
                onChange={(e) => setContent(e.target.value)}
                />
            </div>
          </div>
          <div className='flex justify-between gap-3 mt-3'>
            <div className='flex gap-2'>
              <button className='p-2 px-6 font-medium text-white rounded-lg bg-neonPurple' onClick={() => setContent("")}>Clear</button>
              <button className='p-2 px-6 font-medium text-white rounded-lg bg-neonPurple'>Submit</button>
            </div>
          </div>
        </div>

      </div>
      <footer className='flex justify-between p-2 bg-gray-100 shadow-lg'>

          <button className='flex items-center gap-2 p-2 px-5 font-medium transition-all ease-linear delay-150 border-2 rounded-lg border-neonPurple text-neonPurple hover:text-white hover:bg-neonPurple'>           <GrFormPrevious/>
          Prev</button>
          <button className='p-2 px-5 font-medium transition-all ease-linear delay-150 border-2 rounded-lg border-neonPurple text-neonPurple hover:text-white hover:bg-neonPurple'>Next</button>
      </footer>
    </section>


</main>
    )
}

export default Essay
{
//   <div>
//   <button className='p-2 px-5 rounded-lg bg-neonPurple text-lightWhite'>Prev</button>
// </div>
}
