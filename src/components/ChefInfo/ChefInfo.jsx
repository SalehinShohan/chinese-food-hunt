import React from "react";

const ChefInfo = ({ data }) => {
  const { name, image, experience, recipes, likes } = data;
  return (
    <div className="card w-96 h-3/4 bg-base-100 shadow-2xl mb-20">
      <figure className="px-10 pt-10 mt-10">
        <img src={image} alt="" className="rounded-2xl" />
      </figure>
      <div className="card-body items-center text-center text-white">
        <h2 className="card-title">Name: {name}</h2>
        <p>Years of experience: {experience}</p>
        <span>Numbers of recipes: {recipes}</span>
        <span>Likes: {likes}</span>
        <div className="card-actions">
          <button className="btn btn-outline">View Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default ChefInfo;
