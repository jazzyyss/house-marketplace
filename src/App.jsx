import {Routes, Route} from 'react-router-dom'
import PrivateRoute from './components/PriveateRotue'

import Profile from './pages/Profile'
import Offers from './pages/Offers'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import Explore from './pages/Explore'
import ForgotPassword from './pages/ForgotPassword'

import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/profile' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
      <Navbar />
    </>
  )
}

export default App
