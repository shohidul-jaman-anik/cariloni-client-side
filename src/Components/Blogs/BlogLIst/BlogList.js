import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BlogList.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate("");

  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBlogDetails = (id) => {
    console.log(id, "iddddddddddddd");
    navigate(`/blogDetails/${id}`);
  };

  return (
    <div className="blogsContainer">
      <div className="blogsList">
        {blogs.map((blog) => (
          <div
            className="blogCard rounded overflow-hidden"
            key={blog.id}
            onClick={() => handleBlogDetails(blog.id)}
          >
            <img className="w-full" src={blog.img} alt="Mountain" />

            <div className="">
              <p className="blogdate py-3">14 Oct 2022 </p>
              <h1 className="blogHeading">{blog.name}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-center mt-12">
        <nav
          aria-label="Pagination"
          className="flex justify-center items-center text-gray-600 mt-8 lg:mt-0"
        >
          {" "}
          <Link
            to="#"
            className="p-2 mr-4 rounded hover:bg-gray-100 bg-slate-700 text-white"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />{" "}
            </svg>{" "}
          </Link>{" "}
          <Link
            to="#"
            className="px-4 py-2 rounded bg-gray-200 text-gray-900 font-medium hover:bg-gray-100"
          >
            {" "}
            1{" "}
          </Link>{" "}
          <Link to="#" className="px-4 py-2 rounded hover:bg-gray-100">
            2
          </Link>{" "}
          <Link to="#" className="px-4 py-2 rounded hover:bg-gray-100">
            {" "}
            3{" "}
          </Link>{" "}
          <Link to="#" className="px-4 py-2 rounded hover:bg-gray-100">
            {" "}
            ...{" "}
          </Link>{" "}
          <Link to="#" className="px-4 py-2 rounded hover:bg-gray-100">
            {" "}
            9{" "}
          </Link>{" "}
          <Link
            to="#"
            className="p-2 ml-4 rounded hover:bg-gray-100 bg-slate-700 text-white"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />{" "}
            </svg>{" "}
          </Link>{" "}
        </nav>{" "}
      </div>
    </div>
  );
};

export default BlogList;
