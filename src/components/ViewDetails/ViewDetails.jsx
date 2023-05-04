/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewDetails = () => {
  const allData = useLoaderData();
  
  const [fav, setFav] = useState(false);
  const [fav1, setFav1] = useState(false);
  const [fav2, setFav2] = useState(false);

  const {chefInfoId} = useParams();
  console.log(chefInfoId)

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

  const notify = () => {
    toast.success('Added Favorite List', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
  

  return (
    <div>
      <div className="hero mt-10 text-white">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold mb-2">Name: {name}</h1>
            <p className="mb-2">Description: {description}</p>
            <p className="mb-2">Likes: {likes}k</p>
            <p className="mb-2">Number of recipes: {recipes}</p>
            <p className="">Years of experience: {experience}</p>
          </div>
        </div>
      </div>
      <h1 className="text-center mb-10 mt-20 text-white text-5xl font-bold">
        Famous Recipes
      </h1>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 w-10/12 lg:ml-52 mb-20">
        <div className="card w-96 bg-base-100 shadow-2xl container mx-auto">
          <div className="card-body">
            <h2 className="card-title text-white text-xl font-extrabold">{recipe_name1}</h2>
            <p>
              <span className="text-white">Ingredients:</span> <br />
              1. {allData.ingredients[0]} <br />
              2. {allData.ingredients[1]} <br />
              3. {allData.ingredients[2]} <br />
              4. {allData.ingredients[3]} <br />
              5. {allData.ingredients[4]} <br />
            </p>
            <p>
              <span className="text-white">Cooking method:</span> <br />
              {cooking_method}
            </p>
            <p>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-green-500"
                  checked
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
            </p>
            <div onClick={()=>setFav(true)} className="card-actions justify-end">
              <button disabled={fav} onClick={notify} className="btn btn-primary">Favorite</button>
              <ToastContainer />
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl container mx-auto">
          <div className="card-body">
            <h2 className="card-title text-white text-xl font-extrabold">{recipe_name2}</h2>
            <p>
              <span className="text-white">Ingredients:</span> <br />
              1. {allData.ingredients[0]} <br />
              2. {allData.ingredients[1]} <br />
              3. {allData.ingredients[2]} <br />
              4. {allData.ingredients[3]} <br />
              5. {allData.ingredients[4]} <br />
            </p>

            <p>
              <span className="text-white">Cooking method:</span> <br />
              {cooking_method}
            </p>
            <p>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-green-500"
                  
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-green-500"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
            </p>
            <div onClick={()=>setFav1(true)} className="card-actions justify-end">
              <button disabled={fav1} onClick={notify} className="btn btn-primary">Favorite</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl container mx-auto">
          <div className="card-body">
            <h2 className="card-title text-white text-xl font-extrabold">{recipe_name3}</h2>
            <p>
              <span className="text-white">Ingredients:</span> <br />
              1. {allData.ingredients[0]} <br />
              2. {allData.ingredients[1]} <br />
              3. {allData.ingredients[2]} <br />
              4. {allData.ingredients[3]} <br />
              5. {allData.ingredients[4]} <br />
            </p>
            <p>
              <span className="text-white">Cooking method:</span> <br />
              {cooking_method}
            </p>
            <p>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  checked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
            </p>
            <div onClick={()=>setFav2(true)} className="card-actions justify-end">
              <button disabled={fav2} onClick={notify} className="btn btn-primary">Favorite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
