import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Asset/Page1/Logo.png";
import companyLogo from "../../../Asset/Page1/companyLogo.png";
import "./Footer.css";



const Footer = () => {
  return (
    <div >
      <footer className="footerContainer footer p-10 bg-neutral text-neutral-content">
        <div>
          <img src={logo} alt="logo"></img>
          <p className="my-5 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <br /> Ut enim ad minim veniam
          </p>

          <div className="grid grid-cols-4 gap-x-3">
            {/* <img src={fb} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={linkedIn} alt="LinkedIn" />
            <img src={insta} alt="Instagram" /> */}
            <a href="#facebook" className="facebookBtn m-2 w-10 h-10 inline-flex justify-center items-center shadow-sm rounded-full border-2 " style={{ borderColor: "#ffffff", color: "#ffffff" }}>
              {/* ::facebook svg */}
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
              </svg>
            </a>


            {/* :Twitter */}
            <a href="#twitter" className="twitterBtn m-2 w-10 h-10 inline-flex justify-center items-center shadow-sm rounded-full border-2" style={{ borderColor: "#ffffff", color: "#ffffff" }}>
              {/* ::twitter svg */}
              <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            {/* :Linkedin */}
            <a href="#linkedin" className="linkedInBtn m-2 w-10 h-10 inline-flex justify-center items-center shadow-sm rounded-full border-2" style={{ borderColor: "#ffffff", color: "#ffffff" }}>
              {/* ::linkedin svg */}
              <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            {/* :Instagram */}
            <a href="#instagrap" className="InstaBtn border-2 relative m-2 p-0.5 w-10 h-10 inline-flex justify-center items-center shadow-sm rounded-full bg-transparent text-white">
              {/* ::instagram svg */}
              <div className=" relative z-10 w-full h-full rounded-full flex justify-center items-center ">
                <svg className="w-5 h-5 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              {/* ::border gradient */}
              <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-tr " />
            </a>

          </div>

        </div>
        <div className="lg:mt-10 md:mt-10">
          {/* <span className="footer-title">Services</span> */}
          <span className="text-2xl">Services</span>
          <Link to="/" className="link link-hover text-gray-400">
            Branding
          </Link>
          <Link to="/" className="link link-hover text-gray-400">
            Design
          </Link>
          <Link to="/" className="link link-hover text-gray-400">
            Marketing
          </Link>
          <Link to="/" className="link link-hover text-gray-400">
            Advertisement
          </Link>
        </div>
        <div className="lg:mt-10 md:mt-10">
          <span className="text-2xl">Help & Supports</span>
          <Link to="/" className="link link-hover text-gray-400">
            Help
          </Link>
          <Link to="/" className="link link-hover text-gray-400">
            Term & Conditon
          </Link>
          <Link to="/" className="link link-hover text-gray-400">
            Privacy Policy
          </Link>
          <Link to="/" className="link link-hover text-gray-400">
            Contact
          </Link>
          <Link to="/" className="link link-hover text-gray-400">
            Apply
          </Link>
        </div>
      </footer>
      <div className="downFooter bg-slate-950 flex  items-center py-10">
        <p className="text-white ">© Copyright  2022 | All Rights Reserved | by <span className="text-amber-300">carlonimortgages.com</span></p>
        <img src={companyLogo} alt="" ></img>
      </div>
    </div>
  );
};

export default Footer;
