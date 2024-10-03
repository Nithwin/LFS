import React from 'react'
import { CgProfile } from "react-icons/cg";
import Analytics from './images/analytic.png';
import profile from './images/profile.jpg'
const Profile = () => {
  return (
    <main className="h-auto pt-20 md:ml-64">

    <div className="flex flex-col justify-center gap-10 p-4 mb-4 rounded-lg shadow-lr dark:border-gray-60 lg:flex-row" >
        <div className='flex justify-center '>
          <div className='shadow-xl'>
          <div>
            <div className='flex justify-center'>
              <div className='mb-3 border-4 rounded-full shadow-lg border-neonPurple bg-lightWhite h-28 w-28' >
                <img src={profile} alt="" className='rounded-full'/>
              </div>
            </div>

            <p className='text-xl font-bold text-center'><span>Nithwin V.M</span></p>
            <div className='flex justify-center'>
            <hr className='w-48 h-1 my-5 bg-gray-300 rounded-full'/>
            </div>
             <div>
            <div className=''>
              <table className="w-full text-sm text-left text-gray-500 rtl:text-right ">
                <tbody>

                  <tr className="bg-white ">
                    <th className="px-6 py-4 font-semibold text-black whitespace-nowrap "
                      scope="row"><span>Name</span></th>
                    <td className="px-6 py-4 text-back "> <span className='font-semibold text-black'>Nithwin V M</span> </td>
                  </tr>

                  <tr className="bg-white ">
                    <th className="px-6 py-4 font-semibold text-black whitespace-nowrap "
                      scope="row"><span>Registration Number</span></th>
                    <td className="px-6 py-4 text-back ">
                    <span className='font-semibold text-black'>22CS055</span> </td>
                  </tr>

                  <tr className="bg-white ">
                    <th className="px-6 py-4 font-semibold text-black whitespace-nowrap "
                      scope="row"><span>Email</span></th>
                    <td className="px-6 py-4 text-back ">
                    <span className='font-semibold text-black'>22cs055@nandhaengg.org</span> </td>
                  </tr>

                  <tr className="bg-white ">
                    <th className="px-6 py-4 font-semibold text-black whitespace-nowrap "
                      scope="row"><span>Phone</span></th>
                    <td className="px-6 py-4 text-back ">
                    <span className='font-semibold text-black'>+91 - 8825957733</span> </td>
                  </tr>

                  <tr className="bg-white ">
                    <th className="px-6 py-4 font-semibold text-black whitespace-nowrap "
                      scope="row"><span>Gender</span></th>
                    <td className="px-6 py-4 text-back ">
                    <span className='font-semibold text-black'>Male</span> </td>
                  </tr>

                  <tr className="bg-white ">
                    <th className="px-6 py-4 font-semibold text-black whitespace-nowrap "
                      scope="row"><span>Date of Birth</span></th>
                    <td className="px-6 py-4 text-back ">
                    <span className='font-semibold text-black'>13-11-04</span> </td>
                  </tr>

                </tbody>
              </table>
</div>
            </div>

          </div>

          </div>

        </div>

        <div className='flex justify-center '>
          <div className='shadow-xl'>
          <div>

            <p className='text-xl font-bold text-start ms-5'>Academic Information</p>
             <div>
            <div className=''>
              <table className="w-full text-sm text-left text-gray-500 rtl:text-right ">
                <tbody>
                <tr className="bg-white ">
                    <th className="px-6 py-4 font-bold text-black whitespace-nowrap "
                      scope="row"><span>Information</span></th>
                    <td className="px-6 py-4 text-back ">
                       <span className='font-semibold text-black'>Details</span> </td>
                  </tr>

                  <tr className="bg-white ">
                    <th className="px-6 py-4 font-semibold text-black whitespace-nowrap "
                      scope="row"><span>10th</span></th>
                    <td className="px-6 py-4 text-back ">
                       <span className='font-semibold text-black'>80%</span> </td>
                  </tr>

                  <tr className="bg-white ">
                    <th className="px-6 py-4 font-semibold text-black whitespace-nowrap "
                      scope="row"><span>12th</span></th>
                    <td className="px-6 py-4 text-back ">
                    <span className='font-semibold text-black'>80%</span> </td>
                  </tr>

                  <tr className="bg-white ">
                    <th className="px-6 py-4 font-semibold text-black whitespace-nowrap "
                      scope="row"><span>Diploma</span></th>
                    <td className="px-6 py-4 text-back ">
                    <span className='font-semibold text-black'>Not Applicable</span> </td>
                  </tr>

                  <tr className="bg-white ">
                    <th className="px-6 py-4 font-semibold text-black whitespace-nowrap "
                      scope="row"><span>Current Backlogs</span></th>
                    <td className="px-6 py-4 text-back ">
                    <span className='font-semibold text-black'>0</span> </td>
                  </tr>

                  <tr className="bg-white ">
                    <th className="px-6 py-4 font-semibold text-black whitespace-nowrap "
                      scope="row"><span>Interested in Placement</span></th>
                    <td className="px-6 py-4 text-back ">
                    <span className='font-semibold text-black'>Yes</span> </td>
                  </tr>



                </tbody>
              </table>
</div>
            </div>

          </div>

          </div>

        </div>
    </div>
  </main>
  )
}

export default Profile
