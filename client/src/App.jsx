import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'

import SignIn from './pages/SignIn'
import SignOut from './pages/SignUp'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Private from './components/Private'
import CreateLis from './pages/CreateLis'
import UpdateLis from './pages/UpdateLis'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route element={<Private/>}>
      <Route path="/profile" element={<Profile/>} />
      <Route path="/create-listing" element={<CreateLis/>} />
      <Route path="/update-listing/:listingId" element={<UpdateLis/>} />

      </Route>
      </Routes>    
    </BrowserRouter>
  )
}
