import React, { useState } from 'react'
import { AiOutlineTeam } from 'react-icons/ai';
import { BiLogOut } from "react-icons/bi";
import { FiArrowRightCircle } from "react-icons/fi";

const Sidebar = () => {

    const [open, setOpen] = useState(false);
    
   

  return (

<div className="flex space-x-2 ">
      <div
        className={` ${
          open ? "w-36 lg:w-72" : "w-15 lg:w-20 "
        } bg-dark-purple bg-white h-screen p-1 lg:p-5 mt-4  pt-8 relative duration-300 shadow-lg ` }
      >
           <FiArrowRightCircle onClick={()=>setOpen(x => !x)} className=' text-2xl absolute -right-3 top-4 cursor-pointer ' /> 


        <ul className="pt-6">

            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 "mt-9" `}
            >
              <AiOutlineTeam className='text-4xl ' />
              <span className={`${!open && "hidden"} origin-left duration-200 font-semibold`}>
                Teams
              </span>
            </li>

            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 "mt-9" }  `}
            >
            
              <BiLogOut className='text-4xl' />
              <span className={`${!open && "hidden"} origin-left duration-200 font-semibold`}>
                Logout
              </span>
            </li>
        </ul>
      </div>


      
    </div>


  )
}

export default Sidebar