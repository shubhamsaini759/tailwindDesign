import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";

const Toast = () => {
  return (
    <div>
        <div id="toast-simple" class="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
            <FaTelegramPlane />
            <div class="pl-4 text-sm font-normal">Message sent successfully.</div>
        </div>

        <div id="toast-notification" class="w-full mt-4 max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">

            <div class="flex items-center mb-3">
                <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">New notification</span>
                <div  class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400  rounded-lg cursor-pointer p-1.5  inline-flex h-8 w-8  dark:bg-gray-800 " aria-label="Close">
                    <span class="sr-only">Close</span>
                    <HiOutlineX />
                </div>
            </div>
            <div class="flex items-center">
                <div class="relative inline-block shrink-0">
                    <img class="w-12 h-12 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese Leos image"/>
                </div>
                <div class="ml-3 text-sm font-normal">
                    <div class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</div>
                    <div class="text-sm font-normal">commmented on your photo</div> 
                    <span class="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>   
                </div>
            </div>
        </div>


        <div className="-rotate-45">
            <span className="italic ">Read the latest</span>
            {/* <svg viewBox="0 0 85 29" fill="none" xmlns="http://www.w3.org/2000/svg" class="b pa ac ew pb pc pd hu de">
                <path d="M84.1428 1.12604C68.4579 15.0432 48.2728 24.8484 26.7076 22.7737C20.393 22.1662 13.251 19.5041 7.51 16.6647C6.29685 16.0646 5.19832 15.2656 4.08583 14.4969C3.06981 13.7949 4.95423 22.296 5.12047 23.2959C6.89794 33.9863 5.2443 22.4385 4.04146 18.4653C3.10796 15.3818 1.13626 12.2911 0.701068 9.07517C0.350636 6.4856 5.49948 7.02736 7.26614 6.8582C9.08258 6.68426 20.8214 3.77937 19.2507 7.81152C16.4328 15.0458 10.9147 19.889 6.01223 25.5572" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                </path>
            </svg> */}
        </div>


    </div>
  )
}

export default Toast