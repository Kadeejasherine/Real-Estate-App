import { useEffect, useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'



export default function Header() {
  const {currentUser} = useSelector((state)=>state.user)
  const [searchTerm, setsearchTerm] = useState('')

 const navigate = useNavigate();

  const handleSubmit =(e)=>{
   e.preventDefault();
   const urlParams = new URLSearchParams(window.location.search);
   urlParams.set('searchTerm',searchTerm);
   const searchQuery = urlParams.toString();
   navigate(`search?${searchQuery}`)
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm')
  if(searchTermFromUrl){
    setsearchTerm(searchTermFromUrl)
  }
    
  }, [location.search])
  


  return (
    <header className='bg-red-700 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
     <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap text-red-50'>UrbanBite</h1>
     </Link>
     <form onSubmit={handleSubmit} className='bg-slate-100 p-3 rounded-xl flex items-center '>
     <input type="text" 
     placeholder='search'
     className='bg-transparent focus:outline-none w-24 sm:w-64'
     value={searchTerm}
     onChange={(e)=>setsearchTerm(e.target.value)}
     />
     <button>
     <FaSearch className='text-slate-600'/>
     </button>
     
    </form>
    <ul className='flex gap-4'>
        <Link to='/'>
        <li className='text-red-50 hidden sm:inline hover:border-b-2'>Home</li>
        </Link>
        <Link to='/about'> 
        <li className='text-red-50 hidden sm:inline hover:border-b-2'>About</li>
        </Link>

        
        <Link to='/profile'>
          {currentUser ? (
            <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt="profile"  />
          ) : (
        <li className='text-red-50 hover:border-b-2'>Login</li>
        
              )} 
              
        </Link>
      

        </ul>
        </div>
    </header>
  )
}
