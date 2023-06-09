/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ChefInfo from "../ChefInfo/ChefInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch("https://chinese-food-hunt-server-salehinshohan.vercel.app/chefInfo")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const notify = () => {
    toast.success("Love This Food Recipe", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div>
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
              Traditional Chinese food has to always be <br /> fresh. Most
              dishes are filled with huge quantities of vegetables, <br />{" "}
              grass-fed meats, seafood and herbs and spices. <br /> Every
              ingredient is handpicked for medicinal purposes. <br /> The
              Chinese people rarely eat canned/frozen food
            </p>
            <button className="btn btn-outline btn-accent mt-5 mb-5">
              View Us
            </button>
          </div>
          <div className="w-8/12 h-64">
            <img
              className="rounded-2xl"
              src="https://www.jessicagavin.com/wp-content/uploads/2021/07/Square-Category-Pin-Chinese.jpg"
              alt=""
            />
          </div>
        </div>

        <div>
          <h2 className="text-center mt-40 text-4xl font-bold text-white">
            Our Chef Details
          </h2>
          <p className="text-center text-xl font-bold container mx-auto mt-8">
            Cooking classes come in various forms—it could be the live
            demonstration or the virtual cooking class. Whatever form it may
            take, cooking classes are a great opportunity to develop or enhance
            cooking abilities, learn new techniques, or sample a new cuisine or
            test a kitchen gadget.{" "}
          </p>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 mt-10 lg:ml-32">
            {datas.map((data) => (
              <ChefInfo key={data.id} data={data}>
                {" "}
              </ChefInfo>
            ))}
          </div>
        </div>
      </div>
      <h2 className="text-center text-4xl font-bold text-white mt-10">
        Our Recipes
      </h2>
      <p className="text-center text-xl mt-5 font-bold">
        Your Desired Food is Here!
      </p>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-10 mb-16 container mx-auto lg:ml-80">
        <div className="card w-96 bg-base-100 shadow-2xl image-full mt-10 mb-10">
          <figure>
            <img
              src="https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/hero/2.jpg?tr=w-3840,q-50"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Peking Duck</h2>
            <p>
              Some markets carry both brined and salt-free versions, the vast
              majority of our recipes call for Shaoxing wine.
            </p>
            <div className="card-actions justify-end">
              <button onClick={notify} className="btn btn-primary">
                Love
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-2xl image-full mt-10 mb-10">
          <figure>
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/220921081550-05-chinese-foods-mapo-tofu.jpg?c=original&q=w_1280,c_fill"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Chinese Hamburger</h2>
            <p>
              Most of the sesame oils you see in markets are toasted, so they
              have a dark amber color and rich aroma.
            </p>
            <div className="card-actions justify-end">
              <button onClick={notify} className="btn btn-primary">
                Love
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-2xl image-full mt-10 mb-10">
          <figure>
            <img
              src="https://i.ytimg.com/vi/K71606L_7PY/maxresdefault.jpg"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Kung Pao Chicken</h2>
            <p>
              When it comes to stocking soy sauce for your basic Chinese pantry,
              both regular/light and dark soy sauces are a must.
            </p>
            <div className="card-actions justify-end">
              <button onClick={notify} className="btn btn-primary">
                Love
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-2xl image-full mt-10 mb-10">
          <figure>
            <img
              src="https://assets3.thrillist.com/v1/image/1157499/828x610/flatten;crop;webp=auto;jpeg_quality=60.jpg"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Scallion Pancakes</h2>
            <p>
              Soy sauce is the most iconic and well-known Chinese pantry
              essential that you likely already have stocked.
            </p>
            <div className="card-actions justify-end">
              <button onClick={notify} className="btn btn-primary">
                Love
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center text-4xl font-bold text-white">
        Our Reputation
      </h2>
      <p className="text-center text-xl mt-5 font-bold">
        We are working for you!!
      </p>

      <div className="stats shadow container mx-auto mb-20 mt-10 lg:ml-40 w-full">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://yt3.googleusercontent.com/aXBjiy_KvYKQmBYM2B4w_r9IgOjJI1FbIHdrOKgEVnViLgwyYCmyZ-z0IPFHHeFNmD0wi7MUKg=s900-c-k-c0x00ffffff-no-rj" />
              </div>
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>

      <div className="container mx-auto my-5 py-5">
        <h1 className="text-primary font-bold text-4xl">Contact Us</h1>
        <p>
          Explain why someone should contact your business. Describe how your
          business can help solve the visitors problems. Include an email and
          phone number so visitors can get in touch <br /> with you on their first
          attempt. Include a short form using fields that will help your
          business understand who is contacting them.
        </p>
        <div className="grid grid-cols-2">
          <div className="">
            <div className="my-5">
              <div className="">
                <h5 className="text-secondary text-xl">Phone Number</h5>
                <h6 className="text-primary fw-bold">+880 01886***659</h6>
              </div>
            </div>
            <div className="my-5">
              <div>
                <h5 className="text-secondary text-xl">Email</h5>
                <h6 className="text-primary">ps.shohan@gmail.com</h6>
              </div>
            </div>
            <div className="my-5">
              <div>
                <h5 className="text-secondary text-xl">Address</h5>
                <h6 className="text-primary">B92/8 Savar, Dhaka</h6>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="my-3">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-lg"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-lg"
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Your Message"
              className="input input-bordered input-lg w-full max-w-lg mb-5"
            />
            <br />
            <button className="btn btn-success">Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
