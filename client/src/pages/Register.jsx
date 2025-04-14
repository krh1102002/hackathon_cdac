import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import { registerUser } from '../services/user';

function Register() {
    const [full_name , setFullName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')
    const [phone_no , setPhoneNo] = useState('')

    const navigate = useNavigate()
    const onRegister = async () =>{
        if(full_name.length == 0){
            toast.warn('Please enter name!')
        }
        else if(email.length == 0){
            toast.warn('Please enter email')
        }
        else if(password.length == 0){
            toast.warn('Please enter password')
        }
        else if(confirmPassword.length == 0){
            toast.warn('Please repeat password')
        }
        else if(password != confirmPassword){
            toast.error('Passwords do not match ')
        }
        else if(phone_no.length == 0){
            toast.warn('Please enter phone number')
        }
        else{
            const result = await registerUser(full_name , email , password , phone_no)
            console.log(result)
            if(result.status == 'success'){
                toast.success('Registered successfully')
                navigate('/')
            }
            else{
                toast.error('Could not register!')
            }
        }
    }
    return(
        <div className="container mt-3">
            <h2>Register</h2>
            <div className="row">
                <div className="col-4">
                    <div className="form-floating mb-3">
                        <input onChange={(e) =>{setFullName(e.target.value)}} type="text" id="fullNameInput" className="form-control" placeholder='Full Name'/>
                        <label htmlFor="fullNameInput">Full Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={(e) =>{setEmail(e.target.value)}} type="email" id="emailInput" className="form-control" placeholder='Email'/>
                        <label htmlFor="emailInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={(e) =>{setPassword(e.target.value)}} type="password" id="passwordInput" className="form-control" placeholder='Password'/>
                        <label htmlFor="passwordInput">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={(e) =>{setConfirmPassword(e.target.value)}} type="password" id="confirmPasswordInput" className="form-control" placeholder='Confirm Password'/>
                        <label htmlFor="confirmPasswordInput">Confirm Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={(e) =>{setPhoneNo(e.target.value)}} type="number" id="phoneInput" className="form-control" placeholder='Phone'/>
                        <label htmlFor="phoneInput">Phone</label>
                    </div>
                    <button onClick={onRegister} className="btn btn-success me-3">Register</button>
                    <Link to={'/'} className='btn btn-danger'>Cancel</Link>
                </div>
            </div>
        </div>
    )
}

export default Register
