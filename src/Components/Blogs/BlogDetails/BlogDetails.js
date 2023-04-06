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
  console.log(blog ,"anikkkkkkkkk")

  if (!blog) {
    return <div>Loading...</div>;
  }



  return (
    <div>
      <div>
        <div className="blogBanner">
          <img src={blog.img} className="blogBannerImg" alt=""></img>
        </div>
      </div>
      <div className="blogDetailsSection">
        <h1>{blog?.name}</h1>

        <div className="blogDevider">
          <hr></hr>
        </div>
        <h1>{blog?.date}</h1>
        
        {/* <p>{blog?.description}</p> */}
        {blog?.description?.map(d=><div>
            <h3 className="my-5">{d.title}</h3>
            <p className="mb-10">{d.content1}</p>
            <p className="mb-10">{d.content2}</p>
            <p className="mb-10">{d.content3}</p>
        </div>)}

      </div>
    </div>
  );
};

export default BlogDetails;
