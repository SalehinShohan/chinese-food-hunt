/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";

const ViewDetails = () => {
  const allData = useLoaderData();
  // console.log(allData.ingredients[0]);

  // const newData = allData.find((detail) => detail.id === chefInfoId);

  const {
    name,
    image,
    experience,
    recipes,
    likes,
    recipe_name1,
    recipe_name2,
    recipe_name3,
    cooking_method,
    rating,
    description,
  } = allData;

  return (
    <div>
      <div className="hero mt-10 text-white">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold mb-2">Name: {name}</h1>
            <p className="mb-2">Description: {description}</p>
            <p className="mb-2">Likes: {likes}k</p>
            <p className="mb-2">Number of recipes: {recipes}k</p>
            <p className="">Years of experience: {experience}k</p>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-20 text-white text-3xl font-bold">
        Famous Recipes
      </h1>
      <div className="hero mt-10 ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold mb-2">Name: <br /> {recipe_name1}, <br /> {recipe_name2}, <br /> {recipe_name3}</h1>

            <p className="mb-5 mt-5"> <span className="text-white text-xl">Ingredients:</span> 

               <br /> 1. {allData.ingredients[0]}
               <br /> 2. {allData.ingredients[1]}
               <br /> 3. {allData.ingredients[2]}
               <br /> 4. {allData.ingredients[3]}
               <br /> 5. {allData.ingredients[4]}
    
            </p>
            <p className="mb-5 "> <span className="text-white text-xl">Cooking method:</span> <br /> {cooking_method}</p>

            <p className="mb-5">
              <div className="rating rating-md">
                Rating:
                <input
                  type="radio"
                  name="rating-10"
                  className="mask ml-2 mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </p>
            <button className="btn btn-accent">Button</button>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default ViewDetails;
