import React from "react";
import ShareButton from "../ShareButton/ShareButton";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = (
    <>
      <li className="font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold">
        <Link to="/">Services</Link>
      </li>
      <li className="font-bold">
        <Link to="/">About</Link>
      </li>
      <li className="font-bold">
        <Link to="/">Blog</Link>
      </li>
      <li className="font-bold">
        <Link to="/">Testmonials</Link>
      </li>
      <li className="font-bold">
        <Link to="/">Report</Link>
      </li>
      <li className="font-bold">
        <Link to="/">Apply</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 px-64">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {menuItems}
            </ul>
          </div>
          <div>
            <div className="text-2xl font-extrabold">Cariloni</div>
            <p>Mortgage Brokers</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <ShareButton>Contact</ShareButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
