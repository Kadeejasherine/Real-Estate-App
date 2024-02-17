import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>

   <h1 className='text-3xl text-center font-medium my-10 text-gray-700'>Create an account</h1>
   <form className='flex flex-col gap-4'>
    <input type="text" placeholder='username' className='border border-black rounded-lg p-3' id='username'/>
    <input type="email" placeholder='email' className='border border-black rounded-lg p-3' id='email'/>
    <input type="password" placeholder='password'  className='border border-black rounded-lg p-3' id='password'/>
     <button className='bg-red-600 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>Sign Up</button>

   </form>
  <div className='flex gap-2 mt-5'>
    <p>Have an account?</p>
    <Link to={"/sign-in"}>
     <span className="text-blue-400">Login</span>
    </Link>
  </div>

    </div>
  )
}
