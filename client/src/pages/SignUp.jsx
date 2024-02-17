import { data } from "autoprefixer"
import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom"

export default function SignUp() {
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
  
  console.log(formData)

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      setloading(true)
    const res = await fetch('/api/auth/signup',{
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
    navigate('/sign-in');
    } catch (error) {
      setloading(false)
      seterror(error.message)
    }

    
    
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>

   <h1 className='text-3xl text-center font-medium my-10 text-gray-700'>Create an account</h1>
   <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
    <input type="text" placeholder='username' className='border border-black rounded-lg p-3' id='username' onChange={handleChange}/>
    <input type="email" placeholder='email' className='border border-black rounded-lg p-3' id='email'  onChange={handleChange}/>
    <input type="password" placeholder='password'  className='border border-black rounded-lg p-3' id='password'  onChange={handleChange}/>
     <button disabled={loading} className='bg-red-600 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-80'>{loading ? "Loading..." : "Sign Up"}</button>

   </form>
  <div className='flex gap-2 mt-5'>
    <p>Have an account?</p>
    <Link to={"/sign-in"}>
     <span className="text-blue-400">Login</span>
    </Link>
  </div>
   {error && <p className="text-red-500 mt-5">{error}</p>}
   
    </div>
  )
}
