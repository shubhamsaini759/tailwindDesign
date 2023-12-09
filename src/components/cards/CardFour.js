import React from 'react'

const CardFour = () => {
  return (
        <div class="w-full p-2 max-w-full mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-80 shadow-lg ">
            <div class="relative  flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div class="relative">
                <a class="block  shadow-xl rounded-2xl">
                    <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/home-decor-1.jpg" alt="img-blur-shadow" class="max-w-full shadow-soft-2xl rounded-2xl" />
                </a>
                </div>
                <div class="flex-auto px-1 pt-6 dark:bg-slate-950 ">
                <p class="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">Project #2</p>
                <a href="javascript:;">
                    <h5>Modern</h5>
                </a>
                <p class="mb-6 leading-normal text-sm dark:text-gray-50">As Uber works through a huge amount of internal management turmoil.</p>
                <div class="flex items-center justify-between">
                    <button type="button" class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">View Project</button>
                    demo
                </div>
                </div>
            </div>
        </div>
  )
}

export default CardFour