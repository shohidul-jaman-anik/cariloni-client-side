import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";

const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  console.log("blog id", id);

  useEffect(() => {
    fetch("/Blogs.json")
      .then((response) => response.json())
      .then((blogs) => {
        const newData = blogs.find((b) => b.id == id);
        setBlog(newData);
      });
  }, [id]);
  console.log(blog, "anikkkkkkkkk");

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <div>
        <div className="blogBanner">
          <img src={blog.img} className="blogBannerImg" alt=""></img>
        </div>
      </div>
      <div>
        <div className="blogDetailsSection">
          <h1>{blog?.name}</h1>

          <div className="blogSubInfo">
            <h1 className="blogDate">14-10-2022</h1>
            <p className="">By {blog.author}</p>
          </div>

          <div className="blogDevider">
            <hr></hr>
          </div>

          {/* <p>{blog?.description}</p> */}
          {blog?.description?.map((d) => (
            <div className="blogContent">
              <h3 className="my-5">{d.title}</h3>
              <p className="mb-10">{d.content1}</p>
              <p className="mb-10">{d.content2}</p>
              <p className="mb-10">{d.content3}</p>
            </div>
          ))}
        </div>
        <div className="authorSection">
          <h5 className="font-bold text-3xl mb-5">About the Author</h5>
          <div className="authorContainer flex items-center ">
            <img src={blog.authorImg} alt=""></img>
            <div className="author ml-5">
              <p>{blog.author}</p>
              <h5 className="">{blog.authorName}</h5>
              <p className="aboutAuthor">{blog.aboutAuthor}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
