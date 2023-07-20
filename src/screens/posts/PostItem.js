import React from "react";
import classes from "./PostItem.module.css";
import { Link } from "react-router-dom";

const PostItem = (props) => {
  return (
    <div
      className={`card ${classes["post-item"]}`}
      style={{ width: "15rem", height: "32rem" }}
    >
      <img
        className="card-img-top"
        src={props.img}
        alt="Card image cap"
        style={{ height: "50%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            fontWeight: "bold",
            textTransform: "capitalize",
            textDecoration: "underline",
          }}
        >
          {props.author}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to={`${props.id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
