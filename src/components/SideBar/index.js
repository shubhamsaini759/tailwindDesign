import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaBook, FaBuilding, FaClipboardList, FaFileInvoiceDollar, FaGripLines, FaHome, FaRegChartBar, FaTruckMoving } from 'react-icons/fa';
import { BiLogOut } from "react-icons/bi";


const SideBar = () => {

    const [open, setOpen] = useState(false);
    
   

  return (

<div className="flex space-x-2 ">
      <div
        className={` ${
          open ? "w-36 lg:w-72" : "w-15 lg:w-20 "
        } bg-dark-purple bg-slate-50 h-screen p-1 lg:p-5 mt-4  pt-8 relative duration-300 ` }
      >
       
       
        <ul className="pt-6">
            <li
              className={`flex  rounded-md p-2 pt-0 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 "mt-9" }  `}
            >
              <FaBuilding className='text-base' />

              <span className={`${!open && "hidden"} origin-left duration-200 font-bold`}>
                Company name
              </span>
            </li>
            <div class="mb-2 mt-2 h-px bg-indigo-500/10 w-full "></div>


            <li onClick={() => setOpen(!open)}  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 "mt-9" }  `}  >
             { open ?  <FaArrowLeft className='text-base lg:text-xl' /> : <FaArrowRight className='text-base  lg:text-xl' />  } 
            </li>

            <div class="mb-2 mt-2 h-px bg-indigo-500/10 w-full "></div>

            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 "mt-9" }  `}
            >
              <FaRegChartBar className='text-base' />
              <span className={`${!open && "hidden"} origin-left duration-200 font-semibold`}>
                Dashboard
              </span>
            </li>

            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 "mt-9" }  `}
            >
              <FaTruckMoving className='text-base' />
              <span className={`${!open && "hidden"} origin-left duration-200 font-semibold`}>
                Tracking
              </span>
            </li>
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 "mt-9" }  `}
            >
              <FaClipboardList className='text-base' />
              <span className={`${!open && "hidden"} origin-left duration-200 font-semibold`}>
                Orders
              </span>
            </li>
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 "mt-9" }  `}
            >
              <FaBook className='text-base' />
              <span className={`${!open && "hidden"} origin-left duration-200 font-semibold`}>
                Ledgers
              </span>
            </li>
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 "mt-9" }  `}
            >
              <FaFileInvoiceDollar className='text-base' />
              <span className={`${!open && "hidden"} origin-left duration-200 font-semibold`}>
                Invoices
              </span>
            </li>
            <div class="mb-2 mt-2 h-px bg-indigo-500/10 w-full "></div>
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 "mt-9" }  `}
            >
              <BiLogOut className='text-xl' />
              <span className={`${!open && "hidden"} origin-left duration-200 font-semibold`}>
                Logout
              </span>
            </li>
        </ul>
      </div>


      
    </div>


  )
}

export default SideBar