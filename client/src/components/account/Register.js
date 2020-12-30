import React from "react";
import Navbar from "../layout/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex flex-col bg-white dark:bg-gray-800 shadow px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-lg max-w-md">
          <div className="font-light self-center text-xl sm:text-2xl text-gray-800 dark:text-white mb-2">
            Create a new account
          </div>
          <span className="flex-items-center text-gray-500 dark:text-gray-400 justify-center text-center text-sm">
            Already have an account ?
            <a
              href="#home"
              target="_blank"
              className="text-blue-500 hover:text-blue-700 text-sm underline"
            >
              Sign in
            </a>
          </span>
          <div className="mt-8 p-6">
            <form action="#">
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="pseudo"
                    placeholder="Pseudo"
                  />
                </div>
              </div>
              <div className="flex gap-4 mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="First name"
                    placeholder="First name"
                  />
                </div>
                <div className=" relative ">
                  <input
                    type="text"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="Last name"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex w-full my-4">
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex justify-center items-center mt-6">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="checked-demo"
                  className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none"
                  value="1"
                />
                <span className="text-gray-700 dark:text-white font-normal">
                  I have read and agree term of services
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
