import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../../Asset/Page1/Logo.png";
import companyLogo from "../../../Asset/Page1/companyLogo.png"

import fb from "../../../Asset/Social/facebook.png"
import twitter from "../../../Asset/Social/twitter.png"
import linkedIn from "../../../Asset/Social/likedin.png"
import insta from "../../../Asset/Social/instagram.png"


const Footer = () => {
  return (
    <div >
      <footer className="footerContainer footer p-10 bg-neutral text-neutral-content">
        <div>
          <img src={logo} alt="logo"></img>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <br /> Ut enim ad minim veniam
          </p>
         
         <div className="grid grid-cols-4 gap-x-3">
            <img src={fb} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={linkedIn} alt="LinkedIn" />
            <img src={insta} alt="Instagram" />
         </div>

        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Branding
          </Link>
          <Link to="/" className="link link-hover">
            Design
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title text-white">Help & Supports</span>
          <Link to="/" className="link link-hover">
            Help
          </Link>
          <Link to="/" className="link link-hover">
            Term & Conditon
          </Link>
          <Link to="/" className="link link-hover">
            Privacy Policy
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Apply
          </Link>
        </div>
      </footer>
      <div className="bg-slate-950 flex justify-around items-center py-3">
        <p className="text-white ">© Copyright  2022 | All Rights Reserved | by <span className="text-amber-300">carlonimortgages.com</span></p>
        <img src={companyLogo} alt="company logo"></img>
      </div>
    </div>
  );
};

export default Footer;
