import { data } from "autoprefixer"
import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom"

export default function SignIn() {
const [formData, setformData] = useState({})
const [error, seterror] = useState(null)
const [loading, setloading] = useState(false)
const navigate = useNavigate()


const handleChange = (e)=>{
     setformData({
      ...formData,
      [e.target.id] : e.target.value,
     })
  }
  
  

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      setloading(true)
    const res = await fetch('/api/auth/signin',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(formData)
    })
    const data = await res.json()
    if(data.success===false){
      setloading(false)
      seterror(data.message)
      return;
    }
    setloading(false)
    seterror(null)
    navigate('/');
    } catch (error) {
      setloading(false)
      seterror(error.message)
    }
    
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>

   <h1 className='text-3xl text-center font-medium my-10 text-gray-700'>Welcome back!</h1>
   <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
    <input type="email" placeholder='email' className='border border-black rounded-lg p-3' id='email'  onChange={handleChange}/>
    <input type="password" placeholder='password'  className='border border-black rounded-lg p-3' id='password'  onChange={handleChange}/>
     <button disabled={loading} className='bg-red-600 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-80'>{loading ? "Loading..." : "Sign in"}</button>

   </form>
  <div className='flex gap-2 mt-5'>
    <p>New Here?</p>
    <Link to={"/sign-up"}>
     <span className="text-blue-400">Sign Up</span>
    </Link>
  </div>
   {error && <p className="text-red-500 mt-5">{error}</p>}
   
    </div>
  )
}
