import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [userInfo, serUserInfo] = useState({
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
  });
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "30rem" }}>
        <h2 className="text-center mb-4">Register</h2>
        <div className="form-floating mb-3">
          <input
            type="text"
            id="fullNameInput"
            className="form-control"
            placeholder="Full Name"
            onChange={(e) =>
              serUserInfo({ ...userInfo, full_name: e.target.value })
            }
          />
          <label htmlFor="fullNameInput">Full Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            id="emailInput"
            className="form-control"
            placeholder="Email"
            onChange={(e) =>
              serUserInfo({ ...userInfo, full_name: e.target.value })
            }
          />
          <label htmlFor="emailInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            id="passwordInput"
            className="form-control"
            placeholder="Password"
            onChange={(e) =>
              serUserInfo({ ...userInfo, full_name: e.target.value })
            }
          />
          <label htmlFor="passwordInput">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            id="confirmPasswordInput"
            className="form-control"
            placeholder="Confirm Password"
            onChange={(e) =>
              serUserInfo({ ...userInfo, full_name: e.target.value })
            }
          />
          <label htmlFor="confirmPasswordInput">Confirm Password</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            id="phoneInput"
            className="form-control"
            placeholder="Phone"
            onChange={(e) =>
              serUserInfo({ ...userInfo, full_name: e.target.value })
            }
          />
          <label htmlFor="phoneInput">Phone</label>
        </div>

        <button className="btn btn-success mb-2 w-100">Register</button>
        <p className="text-center">
          Already have an account? Register <Link to="/">here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
