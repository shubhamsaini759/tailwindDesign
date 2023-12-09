import React, { useState } from 'react'
import image from '../../Assets/image.webp'
import two from '../../Assets/imageTwo.jpg'

const PopupOne = () => {

    const[open, setOpen] = useState(false);
    console.log(open)

  return (
    <>
    <buton onClick={()=>setOpen(true)} >show</buton>
        {
            open ?
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
                </div>
                    <div class="fixed inset-0 z-10 overflow-y-auto">
                        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                            <button className='absolute right-0  top-4 pr-12 pt-6' type='button' onClick={()=>setOpen(false)} >close</button>

                            <div class="sm:flex sm:items-center bg-slate-600  ">
                                <img src={two} alt='' />
                            </div>
                    </div>
                </div>
            </div>
            :
            null
        }
       
    </>
  )
}

export default PopupOne


