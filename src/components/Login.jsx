import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <div className='relative blur-2xl'>
  
  <div className='absolute bg-[#27CDF1] h-[546px] w-[556px] top-[5px] left-[100px]'></div>
  <div className='absolute bg-[#F7AE1F] w-[365px] h-[365px] top-[-55px] right-[156px]'></div>
  <div className='absolute bg-[#B0EE2C] w-[297px] h-[297px] bottom-[-700px] left-[300px]'></div>
  <div className='absolute bg-[#EE3DDD] w-[241px] h-[241px] bottom-[-680px] right-[316px]'></div>
</div>

<div className='flex justify-center items-center mt-[40px]'>

  <div className='flex justify-center items-center flex-col border border-black w-[550px] z-50 h-[550px] rounded-3xl bg-[#ffffff54]  '>
    <h1 className='font-display text-4xl font-bold p-2 text-[#000000]'>Login</h1>
    <input type="text" placeholder='Username' className='text-[#000000] rounded-lg border-2 border-[#000000] w-96 h-[40px] p-2 mb-4 outline-none' />
    <input type="password" placeholder='Password' className='text-[#000000] rounded-lg border-2 border-[#000000] w-96 h-[40px] p-2 mb-4 outline-none' />
    <Link to='/home'>
    <button className='text-lg text-[#FFFFFF] rounded-lg border-2 bg-[#000000] w-96 h-[50px] mb-4 border-black '>Login</button>
    </Link>

    <p> Don't have an account? <Link to='/register'><span className='text-[#0038FF]'>Register</span></Link> <br />or continue as a <span className='text-[#0038FF]'>Guest</span></p>
  </div>
</div>


    </>
  )
}

export default Login