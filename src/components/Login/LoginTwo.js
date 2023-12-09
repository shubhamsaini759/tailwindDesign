// import React from 'react'

// import loginphoto from '../assets/loginpage.png'
// import logoTwo from '../assets/logoTwo.png'


// import facebook from '../assets/facebook.svg'
// import google from '../assets/google.svg'
// import twitter from '../assets/twitter.svg'
// import { useNavigate } from 'react-router-dom'


// const LoginPage = () => {

//     const navigate = useNavigate()

//   return (
//     <div>
//         <div className=' w-screen h-screen flex relative' >
//             <div className='w-3/4 h-screen ' style={{ backgroundColor : '#f0f0ff' }} ></div>
//             <div className='w-1/4 h-screen ' style={{ backgroundColor : '#dcdcf4' }}  ></div>

//             <div className='absolute left-14' >
//                 <img src={loginphoto} />
//             </div>

//             <div className='absolute bottom-24 left-14'>
//                 <img src={logoTwo} className='' />
//             </div>


//             <div className='absolute left-2/3 top-1/4 ' >
//                 <div className="w-full max-w-full max-h-full px-3 mx-auto mt-0 md:flex-0  ">
//                     <div className="  flex flex-col justify-center items-center min-w-0 break-words h-1/2 bg-white border-0 shadow-xl rounded-2xl bg-clip-border">

//                         <div className="w-full p-6 mb-0 text-center bg-slate-100 rounded-xl ">
//                             <p className=' text-lg font-bold text-gray-600 pb-4 ' >Welcome to SynCoTix</p>
//                             <p className='font-thin text-sm' >please sign-in to your account</p>
//                         </div> 
                        
//                         <form className='w-96 px-8 py-6 flex flex-col gap-4' >
//                             <div  >
//                                 <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
//                                 <input type="email" name='email'   placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//                                 <p className='font-mono text-red-700' ></p>
//                             </div>
//                             <div>
//                                 <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
//                                 <input type="password" name='password'   placeholder="*************" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//                                 <p className='font-mono text-red-700' ></p>
//                             </div>
//                             <button onClick={()=>navigate('/dashboard')} style={{ backgroundColor : '#29669f' }} className="flex items-center md:w-1/2 justify-between  w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
//                                 <span> Login </span>
//                             </button>
//                         </form>
                        
//                         <div className="inline-flex items-center justify-center w-full">
//                             <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
//                             <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
//                         </div>

                        
//                         <div className='flex gap-4 pb-6' >
//                             <img className=' w-8 cursor-pointer ' src={facebook} />
//                             <img className=' w-8 cursor-pointer ' src={google} />
//                             <img className=' w-8 cursor-pointer ' src={twitter} />
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default LoginPage