/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");

  console.log(email, password, name, photo);

  const handleRegister = (e) => {
    setError("");
    e.target.reset();
    e.preventDefault();
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError("password not valid need 6 char");
      return;
    }
    if ((name, email, photo, password)) {
      registerUser(email, password)
        .then((result) => {
          console.log(result.user);
          setError("");
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
        });
    }
  };

  return (
    <Form className="hero mt-20">
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
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>

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

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  onChange={(e) => setPhoto(e.target.value)}
                  type="file"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>

              <label className="label">
                <a href="#" className="label-text-alt">
                  Alreay have an account?
                  <Link className="link link-hover" to="/login">
                    Login
                  </Link>
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleRegister} className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </div>
        <p>{error.message}</p>
      </div>
    </Form>
  );
};

export default Register;
