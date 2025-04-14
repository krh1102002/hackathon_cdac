import axios from 'axios'
import React , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { loginUser } from '../services/user'

function Login(){
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const navigate = useNavigate()
    const onLogin = async () =>{
        // console.log(email)
        // console.log(password)
        if(email.length == 0){
            toast.error('Please enter email')
        }
        else if(password.length == 0){
        toast.error('Please enter password')
        }
        else{
            const result = await loginUser(email , password)
            console.log(result)
            if(result.status == 'success'){
                sessionStorage.setItem('token' , result.data.token)
                sessionStorage.setItem('full name' , result.data.name)
                navigate('/all_blogs')
            }
            else{
                toast.error('Invalid user name or password')
            }
        }
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
