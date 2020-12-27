import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
return (
    <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex-1 flex justify-between items-center">
        <a
          className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-green-900"
          href="#home" >
          <FontAwesomeIcon icon={["fab", "facebook"]} /> Facebook Reader
        </a>
      </div>
      <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
	    <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />
      <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu" >
        <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:bg-gray-400 text-green-900" href="#home">Log In</a></li>
                <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:bg-gray-400 text-green-900" href="#home">Register</a></li>
            </ul>
        </nav>
      </div>
    </header>
)
}

export default Navbar;
