import React from "react";
import { useLoaderData } from "react-router-dom";
import PostItem from "./PostItem";
import classes from "./Posts.module.css";

const Posts = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className={classes["posts-container"]}>
        {data.map((post) => {
          return (
            <PostItem
              img={post.img}
              title={post.title}
              description={post.description}
              key={post.id}
              id={post.id}
              author={post.author}
            />
          );
        })}
      </div>
    </>
  );
};

export async function loader() {
  const response = await fetch("http://localhost:5000/posts");
  if (!response.ok) {
    console.log("there is an error");
  }
  return response;
}

export default Posts;
