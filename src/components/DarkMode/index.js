import React, { useEffect, useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(true);
    
    const handlerDarkMode = () =>{
        setDarkMode(!darkMode)
    }

    useEffect(()=>{
        document.body.classList.toggle('dark',darkMode)
    },[darkMode])



  return (
    <div>
        <div>
            <button 
                 className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                onClick={handlerDarkMode} 
            >
                {
                    darkMode ?
                    (
                        <FaMoon id='theme-toggle-dark-icon' />
                    )
                    :
                    (
                        <FaSun id='theme-toggle-dark-icon' />
                    )
                }

            </button>
        </div>
    </div>
  )
}

export default DarkMode