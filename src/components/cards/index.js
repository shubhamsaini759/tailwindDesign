import React from 'react'
import { FaMobileAlt } from "react-icons/fa";

const Cards = () => {
  return (
    <>
    <section className="bg-white rounded-xl border border-gray-200 dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        How to use sticky note for problem solving
                    </a>
                    
                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                </div>
            </div>
        </div>
    </div>
    </section>

    <ul role="list" className="mx-auto mt-16 px-4 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
        <li className="rounded-2xl border border-gray-200 p-8  ">
            <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
            <FaMobileAlt />
                <circle cx="16" cy="16" r="16" fill="#A3A3A3" fill-opacity="0.2"></circle></svg><h3 className="mt-6 font-semibold text-gray-900">Invest any amount</h3><p className="mt-2 text-gray-700">Whether it’s $1 or $1,000,000, we can put your money to work for you.</p>
        </li>
        <li className="rounded-2xl border border-gray-200 p-8  ">
            <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
            <FaMobileAlt />
                <circle cx="16" cy="16" r="16" fill="#A3A3A3" fill-opacity="0.2"></circle></svg><h3 className="mt-6 font-semibold text-gray-900">Invest any amount</h3><p className="mt-2 text-gray-700">Whether it’s $1 or $1,000,000, we can put your money to work for you.</p>
        </li>
        <li className="rounded-2xl border border-gray-200 p-8  ">
            <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
            <FaMobileAlt />
                <circle cx="16" cy="16" r="16" fill="#A3A3A3" fill-opacity="0.2"></circle></svg><h3 className="mt-6 font-semibold text-gray-900">Invest any amount</h3><p className="mt-2 text-gray-700">Whether it’s $1 or $1,000,000, we can put your money to work for you.</p>
        </li>
        <li className="rounded-2xl border border-gray-200 p-8  ">
            <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
            <FaMobileAlt />
                <circle cx="16" cy="16" r="16" fill="#A3A3A3" fill-opacity="0.2"></circle></svg><h3 className="mt-6 font-semibold text-gray-900">Invest any amount</h3><p className="mt-2 text-gray-700">Whether it’s $1 or $1,000,000, we can put your money to work for you.</p>
        </li>
    </ul>

   
   
   <section class="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white lg:w-1/4 "><h3 class="flex items-center text-sm font-semibold text-gray-900">
        <svg viewBox="0 0 40 40" aria-hidden="true" class="h-6 w-6 flex-none fill-gray-300"></svg>
        <span class="ml-4">Starter</span></h3><p class="relative mt-5 flex text-3xl tracking-tight text-gray-900">$0</p><p class="mt-3 text-sm text-gray-700">You’re new to investing but want to do it right. Get started for free.</p>
        <div class="order-last mt-6"><ul role="list" class="-my-2 divide-y text-sm divide-gray-200 text-gray-700"><li class="flex py-2">
        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none text-cyan-500"><circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle></svg>
        <span class="ml-4">Commission-free trading</span></li><li class="flex py-2">
        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none text-cyan-500">
        <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle></svg><span class="ml-4">Multi-layered encryption</span></li>
        <li class="flex py-2"><svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none text-cyan-500">
        <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle></svg>
        <span class="ml-4">One tip every day</span></li><li class="flex py-2"><svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none text-cyan-500">
        <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle></svg><span class="ml-4">Invest up to $1,500 each month</span></li></ul></div>
        <a class="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 mt-6" aria-label="Get started with the Starter plan for [object Object]" href="/register">Get started for free</a>
    </section>




    <div class="flex flex-col items-start "><h2 id="episode-5-title" class="mt-2 text-lg font-bold text-slate-900">
        <a href="/5">5: Bill Lumbergh</a></h2><time datetime="2022-02-24T00:00:00.000Z" class="order-first font-mono text-sm leading-7 text-slate-500">February 24, 2022</time>
        <p class="mt-1 text-base leading-7 text-slate-700">He’s going to need you to go ahead and come in on Saturday, but there’s a lot more to the story than you think.</p>
        <div class="mt-4 flex items-center gap-4"><button type="button" class="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900" aria-label="Play episode 5: Bill Lumbergh">
        <svg aria-hidden="true" viewBox="0 0 10 10" fill="none" class="h-2.5 w-2.5 fill-current"><path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z"></path></svg>
        <span class="ml-3" aria-hidden="true">Listen</span></button><span aria-hidden="true" class="text-sm font-bold text-slate-400">/</span>
        <a class="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900" aria-label="Show notes for episode 5: Bill Lumbergh" href="/5">Show notes</a></div>
    
    </div>


    <div class="flex flex-col items-start "><h2 id="episode-5-title" class="mt-2 text-lg font-bold text-slate-900">
        <a href="/5">5: Bill Lumbergh</a></h2><time datetime="2022-02-24T00:00:00.000Z" class="order-first font-mono text-sm leading-7 text-slate-500">February 24, 2022</time>
        <p class="mt-1 text-base leading-7 text-slate-700">He’s going to need you to go ahead and come in on Saturday, but there’s a lot more to the story than you think.</p>
        <div class="mt-4 flex items-center gap-4"><button type="button" class="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900" aria-label="Play episode 5: Bill Lumbergh">
        <svg aria-hidden="true" viewBox="0 0 10 10" fill="none" class="h-2.5 w-2.5 fill-current"><path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z"></path></svg>
        <span class="ml-3" aria-hidden="true">Listen</span></button><span aria-hidden="true" class="text-sm font-bold text-slate-400">/</span>
        <a class="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900" aria-label="Show notes for episode 5: Bill Lumbergh" href="/5">Show notes</a></div>
    
    </div>
    {/* <div class="mb-8 mt-8 h-px w-80 bg-indigo-500/10"></div> */}


    </>
  )
}

export default Cards
