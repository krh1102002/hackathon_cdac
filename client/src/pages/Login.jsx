import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/user";
import { toast } from "react-toastify";
import { AuthContext } from "../App";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogin = async () => {
    if (email.length == 0) {
      toast.error("Please enter email");
    } else if (password.length == 0) {
      toast.error("Please enter password");
    } else {
      const result = await loginUser(email, password);

      if (result.status == "success") {
        const { fullName } = result.data;
        sessionStorage.setItem("token", result.data.token);
        sessionStorage.setItem("full name", result.data.name);
        setUser({ fullName });
        toast.success("Login Successfully");
        navigate("/container/all_blogs");
      } else {
        toast.error("Invalid user name or password");
      }
    }
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
