import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const {currentUser} = useSelector((state)=>state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'> Profile</h1>
      <form className='flex flex-col gap-4'>
       <img src={currentUser.avatar} alt="profile" 
       className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'/>
       <input type="text" placeholder='username' className='border p-3 rounded-lg bg-gray-100' id='username'/>
       <input type="email" placeholder='email' className='border p-3 rounded-lg bg-gray-100' id='email' />
       <input type="text" placeholder='password' className='border p-3 rounded-lg bg-gray-100' id='password'/>
       <button className='bg-red-600 p-3 rounded-lg text-white'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-600 cursor-pointer'>Delete account</span>
        <span className='text-slate-600 cursor-pointer'>Sign out</span>
      </div>
    </div>
  )
}
