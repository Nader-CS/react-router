import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import classes from "./PostDetail.module.css";
import Error from "../error/Error";

const PostDetail = () => {
  const data = useLoaderData();
  console.log(data);
  if (data.isError) {
    return <Error />;
  }
  return (
    <div className={`card ${classes["post-item"]}`}>
      <img className="card-img-top" src={data.img} alt="Card image cap" />
      <div className="card-body" style={{ textAlign: "center" }}>
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.description}</p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to=".." className="btn btn-primary">
            Back
          </Link>
          <Link to={`edit`} className="btn btn-primary">
            EditPost
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;

export async function loader({ params }) {
  const id = params.id;
  const response = await fetch(`http://localhost:5000/posts/${id}`);
  if (!response.ok) {
    throw { isError: true };
  }
  return response;
}
