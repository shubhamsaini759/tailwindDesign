import React from 'react'
import { Scrolllist } from './ScrollList'


const ScrollAble = () => {
  return (
    <div className='flex space-x-4 px-4  whitespace-nowrap overflow-x-scroll scrollbar-hide  ' >
        {
            Scrolllist.map((x,ind)=>(
                <p key={ind} 
                    className='last:pr-4 cursor-pointer transition duration-100 transform hover:scale-125 hover:animate-bounce ' 
                >{x.name}</p>
            ))
        }

    </div>
  )
}

export default ScrollAble