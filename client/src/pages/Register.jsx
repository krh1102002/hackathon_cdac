import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
    return(
        <div className="container mt-3">
            <h2>Register</h2>
            <div className="row">
                <div className="col-4">
                    <div className="form-floating mb-3">
                        <input type="text" id="fullNameInput" className="form-control" placeholder='Full Name'/>
                        <label htmlFor="fullNameInput">Full Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" id="emailInput" className="form-control" placeholder='Email'/>
                        <label htmlFor="emailInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" id="passwordInput" className="form-control" placeholder='Password'/>
                        <label htmlFor="passwordInput">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" id="confirmPasswordInput" className="form-control" placeholder='Confirm Password'/>
                        <label htmlFor="confirmPasswordInput">Confirm Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" id="phoneInput" className="form-control" placeholder='Phone'/>
                        <label htmlFor="phoneInput">Phone</label>
                    </div>
                    <button className="btn btn-success me-3">Register</button>
                    <Link to={'/'} className='btn btn-danger'>Cancel</Link>
                </div>
            </div>
        </div>
    )
}

export default Register
