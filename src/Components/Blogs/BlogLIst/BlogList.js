import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);

  return (
    <div className="servicesContainer">
      <div class="servicesList p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src={blog.img} alt="Mountain" />

            <div class="px-6 py-6">
              <p className="text-gray-700">{blog?.date}</p>
              <div class="font-bold text-gray-700 text-xl mb-2">
                {blog.name}
              </div>
              {/* <p class="text-gray-700 text-base">{blog.description}</p> */}
            </div>
          </div>
        ))}
      </div>

      <div class="flex flex-col lg:flex-row justify-center">
        <nav
          aria-label="Pagination"
          class="flex justify-center items-center text-gray-600 mt-8 lg:mt-0"
        >
          {" "}
          <Link
            to="#"
            class="p-2 mr-4 rounded hover:bg-gray-100 bg-slate-700 text-white"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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
            class="px-4 py-2 rounded bg-gray-200 text-gray-900 font-medium hover:bg-gray-100"
          >
            {" "}
            1{" "}
          </Link>{" "}
          <Link to="#" class="px-4 py-2 rounded hover:bg-gray-100">
            2
          </Link>{" "}
          <Link to="#" class="px-4 py-2 rounded hover:bg-gray-100">
            {" "}
            3{" "}
          </Link>{" "}
          <Link to="#" class="px-4 py-2 rounded hover:bg-gray-100">
            {" "}
            ...{" "}
          </Link>{" "}
          <Link to="#" class="px-4 py-2 rounded hover:bg-gray-100">
            {" "}
            9{" "}
          </Link>{" "}
          <Link
            to="#"
            class="p-2 ml-4 rounded hover:bg-gray-100 bg-slate-700 text-white"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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