import { useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import ArrowRightIcon from '../assets/svg/keyboardArrowRightIcon.svg?react'
import VisibilityIcon from '../assets/svg/visibilityIcon.svg'

const Signup = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const {name, email, password} = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">WelcomeBack</p>
        </header>
        <form>
        <input
             type="text" 
             className="nameInput" 
             id="name" 
             placeholder="Name"
             value={name}
             onChange={onChange}
          />
          <input
             type="email" 
             className="emailInput" 
             id="email" 
             placeholder="Email"
             value={email}
             onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input 
              type={showPassword? 'text' : 'password'} 
              className="passwordInput"
              placeholder="Password"
              id='password'
              value={password}
             onChange={onChange}
            />
            <img 
              src={VisibilityIcon} 
              alt="show password" 
              className="showPassword" 
              onClick={()=> setShowPassword((prevState)=> !prevState)}
              />
          </div>
          <Link to='/forgot-password' className="forgotPasswordLink">Forgot Password</Link>
          <div className="signUpBar">
            <p className="signUpText">
              Sign Up
            </p>
            <button className="signUpButton">
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </form>
        {/* Google OAuth */}

        <Link to='/sign-in' className="registerLink"> Sign In Instead</Link>
      </div>
    </>
  )
}

export default Signup