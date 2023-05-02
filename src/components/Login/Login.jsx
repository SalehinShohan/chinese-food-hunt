/* eslint-disable no-unused-vars */
import { Container } from "postcss";
import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provide/AuthProvider";

const Login = () => {
  const {loginUser} =useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) =>{
    e.preventDefault();
    if((email, password)){
      loginUser(email, password)
      .then(result =>{
        console.log(result.user)
        navigate('/');
      })
      .catch(err => console.log(err.message))
    }
  }
  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-10">Login now!</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
               onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
               onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt">
                  Forgot password? <Link className="link link-hover" to="/register">Register</Link>
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleLogin} className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
