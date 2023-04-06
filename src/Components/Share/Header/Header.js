import React from "react";
import ShareButton from "../ShareButton/ShareButton";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../Asset/Page1/navLogo.png";

const Header = () => {

  const menuItems = (
    <>
      <li id="sidebar" className="font-bold navLink">
        <NavLink to="/" className="">Home</NavLink>
      </li>
      <li id="sidebar" className="font-bold navLink ">
        <NavLink to="/services">Services</NavLink>
      </li>
      <li id="sidebar" className="font-bold navLink">
        <NavLink to="/about" className=" ">About</NavLink>
      </li>
      <li id="sidebar" className="font-bold navLink">
        <NavLink to="/blogs" className="">Blog</NavLink>
      </li>
      <li id="sidebar" className="font-bold navLink">
        <NavLink to="/testimonials" className="">Testmonials</NavLink>
      </li>
      <li id="sidebar" className="font-bold navLink">
        <NavLink to="/report" className=" ">Report</NavLink>
      </li>
      {/* <li className="font-bold">
        <NavLink to="/">Apply</NavLink>
      </li> */}
    </>
  );
  return (
    <div className="flex justify-between items-center navContainer ">
      <div className="  navbar bg-base-100">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {menuItems}
            </ul>
          </div>
          <div>
           <Link to="/">
           <img src={logo} alt="" className="navLogo"></img>
           </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="mx-auto menu-horizontal px-1">{menuItems}</ul>
        </div>
       
      </div>
      {/* <div className="navbar-end"> */}
          <button className="headerBtn  btn btn-outline btn-white border-white text-white bg-slate-900">
            <Link to="/contact">Contact</Link>
          </button>
        {/* </div> */}
     
    </div>
  );
};

export default Header;
