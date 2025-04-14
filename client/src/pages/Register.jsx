import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../services/user";

function Register() {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone_no, setPhoneNo] = useState("");

  const navigate = useNavigate();
  const onRegister = async () => {
    if (full_name.length == 0) {
      toast.warn("Please enter name!");
    } else if (email.length == 0) {
      toast.warn("Please enter email");
    } else if (password.length == 0) {
      toast.warn("Please enter password");
    } else if (confirmPassword.length == 0) {
      toast.warn("Please repeat password");
    } else if (password != confirmPassword) {
      toast.error("Passwords do not match ");
    } else if (phone_no.length == 0) {
      toast.warn("Please enter phone number");
    } else {
      const result = await registerUser(full_name, email, password, phone_no);
      console.log(result);
      if (result.status == "success") {
        toast.success("Registered successfully");
        navigate("/");
      } else {
        toast.error("Could not register!");
      }
    }
  };
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
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <label htmlFor="fullNameInput">Full Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            id="emailInput"
            className="form-control"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="emailInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            id="passwordInput"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="passwordInput">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            id="confirmPasswordInput"
            className="form-control"
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <label htmlFor="confirmPasswordInput">Confirm Password</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            id="phoneInput"
            className="form-control"
            placeholder="Phone"
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
          />
          <label htmlFor="phoneInput">Phone</label>
        </div>

        <button onClick={onRegister} className="btn btn-success mb-2 w-100">
          Register
        </button>
        <p className="text-center">
          Already have an account? Register <Link to="/">here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
