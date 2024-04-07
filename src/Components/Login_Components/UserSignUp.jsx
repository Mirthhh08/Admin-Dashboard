import React, { useState } from "react";
import { useContext } from "react";

import loginImg from "../../assets/loginImg.png";
import { StateContext } from "../../Context/StateContext";

const UserSignUp = () => {
  const { display, setDisplay, setSignUp } = useContext(StateContext);
  const [formData, setFormData] = useState({
    name: "",
    store: "",
    email: "",
    password: "",
  });

  console.log(formData);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const signup = async () => {
    // console.log("signup");
    let resdata;

    await fetch("http://localhost:4000/seller/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (resdata = data));

    if (resdata.success) {
      localStorage.setItem("auth-token", resdata.token);
      setDisplay((prev) => !prev);
    } else {
      alert(resdata.errors);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center h-screen  ">
      <div className=" ">
        <div className="text-center mb-4 ">
          <h1 className="text-xl font-bold text-gray-800">ezMart</h1>
        </div>
        <div className="w-[80vw] flex flex-col  md:flex-row items-between gap-8 justify-center pt-10">
          <div className="hidden md:block md:w-[400px] ">
            <div className="">
              <div className="mb-4 md:w-[100%] flex flex-col justify-center items-center gap-4 ">
                <p className="w-[350px] text-xl font-bold text-gray-600 ">
                  Start selling on ezMart today!
                </p>
                <p className="text-sm w-[350px] font-normal text-gray-600">
                  Become the highest seller in your locality with ezMart
                </p>
              </div>

              <img src={loginImg} alt="img" className="" />
            </div>
          </div>

          <div className="flex justify-center w-[100%]">
            <form className="bg-white rounded px-4 pt-6 pb-8 mb-4 flex flex-col justify-center items-center  w-[600px]">
              <h2 className="text-lg font-bold text-left text-gray-800 mb-8">
                Create an Account
              </h2>
              <div className="mb-4  w-[100%]">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold "
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="appearance-none border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Mirth Pawar"
                />
              </div>
              <div className="mb-4 w-[100%]">
                <label
                  htmlFor="storename"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Store Name
                </label>
                <input
                  type="text"
                  id="store"
                  value={formData.store}
                  onChange={handleChange}
                  className="appearance-none border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Zenith"
                />
              </div>
              <div className="mb-4 w-[100%]">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="example@example.com"
                />
              </div>
              <div className="mb-4 w-[100%]">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="********"
                />
                <div className="flex justify-start items-start gap-4 font-medium mt-4">
                  <p className="">Already have an account</p>
                  <p
                    className="underline underline-offset-2 hover:cursor-pointer"
                    onClick={() => setSignUp(false)}
                  >
                    LogIn
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={signup}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
