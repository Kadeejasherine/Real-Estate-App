import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../Firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice.js';
import  {useNavigate} from 'react-router-dom'

export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

const handleGoogleclick=async()=>{
    try {
         const provider = new GoogleAuthProvider();
         const auth = getAuth(app)

         const result = await signInWithPopup(auth,provider)
         const res = await fetch('/api/auth/google',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                name:result.user.displayName,
                email:result.user.email,
                photo:result.user.photoURL
            })
         })
         const data = await res.json()
          dispatch(signInSuccess(data));
          navigate('/')

    } catch (error) {
        console.log('Could not sign you in',error)
    }

}

  return (

    <button onClick={handleGoogleclick} type="button" className='bg-white text-black p-3 rounded-lg border border-b-lime-500 border-r-blue-400 border-l-orange-400 border-t-red-500 hover:bg-slate-50'>Continue with Google</button>


  )
}
