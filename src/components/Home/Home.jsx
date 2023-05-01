import React, { useEffect, useState } from "react";
import ChefInfo from "../ChefInfo/ChefInfo";

const Home = () => {

    const [datas, setData] = useState([]);
    useEffect( ()=> {
        fetch('http://localhost:5000/chefInfo')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

  return (
    <div className="lg:ml-16">
      <div className="container mx-auto grid sm:grid-cols-1 lg:grid-cols-2 mt-16 lg:ml-64">
        <div>
          <h2 className="text-6xl font-bold leading-normal">
            Chinese Various
            <br />
            Types Of <br />
            <span className="text-yellow-300">Food Recipe</span>
          </h2>
          <p className="mt-5 text-white">
            Traditional Chinese food has to always be <br /> fresh. Most dishes
            are filled with huge quantities of vegetables, <br /> grass-fed
            meats, seafood and herbs and spices. <br /> Every ingredient is
            handpicked for medicinal purposes. <br /> The Chinese people rarely
            eat canned/frozen food
          </p>
          <button className="btn btn-outline btn-accent mt-5">View Us</button>
        </div>
        <div className="w-8/12 h-64">
          <img
            src="https://www.jessicagavin.com/wp-content/uploads/2021/07/Square-Category-Pin-Chinese.jpg"
            alt=""
          />
        </div>
      </div>

      <div>
        <h2 className="text-center mt-40 text-4xl font-bold">Featured Jobs</h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-10 lg:ml-80">
        {datas.map((data) => (
          <ChefInfo key={data.id} data={data}>
            {" "}
          </ChefInfo>
        ))}
      </div>

      </div>
    </div>
  );
};

export default Home;
