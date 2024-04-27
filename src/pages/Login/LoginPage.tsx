
import { Link } from 'react-router-dom'
import './login.css'
import { Lock, User } from 'lucide-react'
export default function LoginPage() {
  return (
    <div className="wrapper">
    <form action="">
      <h1>Login</h1>
      <div className="input-box">
        <input type="text" placeholder='Username' required />
        <User className='icon' />          
      </div>
      <div className="input-box">
        <input type="password" placeholder='Password' required />
        <Lock className='icon'/>
      </div>


      <div className="remember-forgot">
        <label> <input type="checkbox" />Rememnber me</label>
        <a href="#">Forgot password?</a>          
      </div>

      <button type="submit">Login</button>

      <div className="register-link">
        <p>Don't have an account?<Link to="/SignUp">Register</Link></p>
      </div>
    </form>
  </div>
  )
}
