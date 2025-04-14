import axios from 'axios'
import React , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login(){
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const onLogin = async () =>{
        console.log(email)
        // console.log(password)
    }
    return(
        <div className='container mt-3'>
            <h2>Login</h2>
            <div className="row">
                <div className="col-4">
                    <div className="form-floating mb-3">
                        <input onChange={(e) =>{setEmail(e.target.value)}} id='emailInput' type="email" className="form-control" placeholder='Email'/>
                        <label htmlFor="emailInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={(e) =>{setPassword(e.target.value)}} id='passwordInput' type="password" className="form-control" placeholder='Password'/>
                        <label htmlFor="passwordInput">Password</label>
                    </div>
                    <button onClick={onLogin} className="btn btn-success mb-2">Login</button>
                    <p>Don't have an account? Register <Link to={'/register'}>here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login
