/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';
import './ChefInfo.css';

const ChefInfo = ({ data }) => {
  const { name, image, experience, recipes, likes, id } = data;
  return (
    <div className="card w-96 h-4/4 bg-base-100 shadow-2xl mb-20">
      <LazyLoad className="px-10">
        <img src={image} alt="" className="rounded-2xl" />
      </LazyLoad>
      <div className="card-body items-center text-center text-white">
        <h2 className="card-title">Name: {name}</h2>
        <p>Years of experience: {experience}</p>
        <span>Numbers of recipes: {recipes}</span>
        <span>Likes: {likes}k</span>
        <div className="card-actions">
          <Link to={`../chefInfo/${id}`} className="btn btn-outline">View Recipes</Link>
        </div>
      </div>
    </div>
  );
};

export default ChefInfo;
