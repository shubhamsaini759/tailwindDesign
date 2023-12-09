import React from 'react'

const CardThree = () => {
  return (
    <ol role="list" class="mt-10 space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur">
        <li aria-label="Steven McHail talking about Not so one-time payments at 9:00AM - 10:00AM PST">
            <h4 class="text-lg font-semibold tracking-tight text-blue-900">Steven McHail</h4>
            <p class="mt-1 tracking-tight text-blue-900">Not so one-time payments</p>
            <p class="mt-1 font-mono text-sm text-slate-500">
            <time datetime="2022-04-04T9:00AM-08:00">9:00AM</time> 
            <time datetime="2022-04-04T10:00AM-08:00">10:00AM</time>PST</p>
        </li>
        <div class="mx-auto mb-8 h-px w-48 bg-indigo-500/10"></div>

        <li aria-label="Steven McHail talking about Not so one-time payments at 9:00AM - 10:00AM PST">
            <h4 class="text-lg font-semibold tracking-tight text-blue-900">Steven McHail</h4>
            <p class="mt-1 tracking-tight text-blue-900">Not so one-time payments</p>
            <p class="mt-1 font-mono text-sm text-slate-500">
            <time datetime="2022-04-04T9:00AM-08:00">9:00AM</time> 
            <time datetime="2022-04-04T10:00AM-08:00">10:00AM</time>PST</p>
        </li>
        <div class="mx-auto mb-8 h-px w-48 bg-indigo-500/10"></div>
	
    </ol>
  )
}

export default CardThree