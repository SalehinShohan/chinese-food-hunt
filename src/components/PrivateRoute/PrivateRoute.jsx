/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../provide/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return <div className="text-center font-extrabold mt-96 text-xl">Loading...</div>;
}

  if (user) {
    return children;
  }

  return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;
