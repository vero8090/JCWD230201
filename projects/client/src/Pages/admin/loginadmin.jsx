import { useEffect, useRef } from "react"

//import assets
import ipone from './../../Assets/iPhone_User.webp'
import ifrit from './../../Assets/ifrit.png'

import axios from 'axios'

export default function LoginAdmin(props){

    let email= useRef()
    let password = useRef()
    return(
        <div className='flex h-screen  '>
                <div className="flex flex-col gap-8 py-3 w-1/2 h-full text-black">
                        <div className="text-5xl px-7 flex items-center">
                          
                            <div>  iVrt</div>
                              <img className="w-16 h-16" src={ifrit} alt="" />
                          
                        </div>
                        <img className="drop-shadow-md rounded-xl object-contain" src={ipone}alt="" />

                </div>
            

                    <div className='w-1/2 flex flex-col gap-5 p-20'>

                        <div className='text-2xl font-semibold'>
                            Please login into your Admin account!
                        </div>

                        <div className='flex flex-col relative'>
                            <input ref={email} type="text" id="email" className="block rounded-lg 
                            px-4 pb-2.5 pt-5 w-2/3 text-md font-semibold
                             text-black border-2 border-gray-300
                            focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " />
                            <label htmlFor="email" className="absolute text-sm text-gray-500 font-semibold duration-300 transform -translate-y-4 scale-75
                             top-4 z-10 left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                             peer-focus:-translate-y-4">Your Email</label>
                        </div>

                        <div className='flex flex-col relative'>
                            <input ref={password} type="password" id="password" className="block rounded-lg 
                            px-4 pb-2.5 pt-5 w-2/3 text-md font-semibold
                             text-black border-2 border-gray-300
                            focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " />
                            <label htmlFor="password" className="absolute text-sm text-gray-500 font-semibold duration-300 transform -translate-y-4 scale-75
                             top-4 z-10 left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                             peer-focus:-translate-y-4">Password</label>
                        </div>

                        <button onClick={()=> props.funcLogin.loginAdmin(email.current.value, password.current.value)}
                         className='bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 text-white w-[120px] rounded-xl font-semibold p-3'> Login</button>

                        {/* login box */}
                    </div>
                    
                    {/* content */}
                </div>

    )
}