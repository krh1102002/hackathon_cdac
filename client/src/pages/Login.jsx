import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    console.log(email);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "30rem" }}>
        <h2 className="text-center mb-4">Login</h2>
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="emailInput"
            type="email"
            className="form-control"
            placeholder="Email"
          />
          <label htmlFor="emailInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setPassword(e.target.value)}
            id="passwordInput"
            type="password"
            className="form-control"
            placeholder="Password"
          />
          <label htmlFor="passwordInput">Password</label>
        </div>
        <button onClick={onLogin} className="btn btn-success mb-2 w-100">
          Login
        </button>
        <p className="text-center">
          Don't have an account? Register <Link to="/register">here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
