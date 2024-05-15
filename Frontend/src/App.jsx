import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import {Login} from './pages/Login'
import About from './pages/About'
import {Navbar} from './Components/Navbar'
import {Services} from './pages/Services'
import Contact from './pages/Contact'
import {Register} from './pages/Register'
import Footer from './Components/Footer'
import Error from './pages/Error'
import {Logout} from './pages/Logout'
import Feedback_Home from './pages/Feedback_Home'
import Admin_layout from './Components/layouts/Admin_layout'
import Admin_users from './pages/Admin_users'
import Admin_feedback from './pages/Admin_feedback'
import Feedback from './pages/Feedback'
import {AdminUpdate} from './pages/Admin_Update'
import {AdminContacts} from './pages/AdminContacts'


function App() {
   
  return (
  <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Logout' element={<Logout/>}/>
        <Route path='/Feedback' element={<Feedback_Home/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/FeedbackForm' element={<Feedback/>}/>
        <Route path='/admin' element={<Admin_layout/>}>
        <Route path='users' element={<Admin_users/>}/>
        <Route path="contacts" element={<AdminContacts />} />
        <Route path='feedback' element={<Admin_feedback/>}/>
        <Route path="users/:id/edit" element={<AdminUpdate />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  )
}

export default App
