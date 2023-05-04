/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Form,Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provide/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../../FireBase/firebase.config";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const provider1 = new GithubAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        result.user;
        navigate(from, {replace:true});
      })
      .catch((err) => console.log(err.message));
  };

  const handleGithubSingIn = () => {
    signInWithPopup(auth, provider1)
      .then((result) => {
        result.user;
        navigate(from, {replace:true});
      })
      .catch((err) => console.log(err.message));
  };

  const { loginUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
          navigate(from, {replace:true});
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <Form>
      <Form className="hero mt-20">
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
                  required
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
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt">
                    Forgot password?{" "}
                    <Link className="link link-hover" to="/register">
                      Register
                    </Link>
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleLogin} className="btn btn-primary">
                  Login
                </button>
              </div>
              <div className="mt-5">
                <button
                  onClick={handleGoogleSingIn}
                  className="btn btn-outline btn-accent mr-2">
                  {" "}
                  <FaGoogle className="mr-2" /> Login Google
                </button>
                <button
                  onClick={handleGithubSingIn}
                  className="btn btn-outline btn-info">
                 
                  <FaGithub className="mr-2" /> Login Github{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Form>
  );
};

export default Login;
