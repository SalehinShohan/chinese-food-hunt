/* eslint-disable no-unused-vars */
import { Container } from "postcss";
import React, { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Register = () => {
    const {registerUser} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');

    

    const handleRegister = (e) =>{
        e.preventDefault();
        console.log(name, email, password, photo)
    }

  return (
    <div className="hero mt-20">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mb-10">Registration now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input onChange={(e)=> setName(e.target.value)} type="text" placeholder="Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" className="input input-bordered" required/>

          <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input onChange={(e)=> setPhoto(e.target.value)} type="text" placeholder="Photo URL" className="input input-bordered" required/>
        </div>

          <label className="label">
            <a href="#" className="label-text-alt">Alreay have an account? <Link className="link link-hover" to='/login'>Login</Link> </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleRegister} className="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Register;
