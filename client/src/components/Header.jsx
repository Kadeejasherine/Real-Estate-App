import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <header className='bg-red-700 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
     <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap text-red-50'>UrbanBite</h1>
     </Link>
     <form className='bg-slate-100 p-3 rounded-xl flex items-center '>
     <input type="text" 
     placeholder='Search...'
     className='bg-transparent focus:outline-none w-24 sm:w-64'
     />
     <FaSearch className='text-slate-600'/>
    </form>
    <ul className='flex gap-4'>
        <Link to='/'>
        <li className='text-red-50 hidden sm:inline hover:border-b-2'>Home</li>
        </Link>
        <Link to='/about'> 
        <li className='text-red-50 hidden sm:inline hover:border-b-2'>About</li>
        </Link>
        <Link to='/sign-in'>
        <li className='text-red-50 hover:border-b-2'>Login</li>
        </Link>
    </ul>
        </div>
    </header>
  )
}
