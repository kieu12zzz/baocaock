import React from 'react'
import { Lock, Mail, User,Chrome } from 'lucide-react'
import './SignUp.css'
import { Link } from 'react-router-dom'
export default function SignUpPage() {
  return (
    <div className="wrapper">
    <form action="">
      <h1>SignUp </h1>
      <div className="input-box">
        <input type="text" placeholder='Username' required />
        <User className='icon' />          
      </div>
      <div className="input-box">
        <input type="email" placeholder='Email' required />
        <Mail className='icon'/>
      </div>
      <div className="input-box">
        <input type="password" placeholder='Password' required />
        <Lock className='icon'/>
      </div>
      <div className="input-box">
        <input type="password" placeholder='Repassword' required />
        <Lock className='icon'/>
      </div>

      <div className="remember-forgot">
        <label> <input type="checkbox" />I Agree With The Tems And Conditions</label>          
      </div>

      <button type="submit">SignUp</button>

      <h4>Or</h4>

      <button type="button" className="chrome-btn">
         <Chrome className='icon-chrome'/> SignUp with Chrome
      </button>

      <div className="register-link">
        <p>Already have an account? <Link to="/Login">Login</Link></p>
      </div>
    </form>
  </div>  
  )
}
