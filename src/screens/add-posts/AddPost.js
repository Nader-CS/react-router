import React from "react";
import { Form, redirect } from "react-router-dom";
import classes from "./AddPost.module.css";
import { useNavigation } from "react-router-dom";
import { createPortal } from "react-dom";

const AddPost = () => {
  const navigation = useNavigation();
  const isSubmitting =
    navigation.state == "submitting" || navigation.state != "idle";
  console.log(isSubmitting);
  return (
    <div>
      {isSubmitting &&
        createPortal(
          <div
            style={{
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.3)",
              position: "absolute",
              zIndex: "1",
            }}
          >
            <span className={classes.loader}></span>
          </div>,
          document.getElementById("backdrop")
        )}
      <Form method="POST">
        <div className={classes["container"]}>
          <div class="mb-3">
            <label className={`form-label ${classes.label}`}>Author</label>
            <input
              required
              name="author"
              type="text"
              className="form-control"
              placeholder="Author"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div class="mb-3">
            <label className={`form-label ${classes.label}`}>Title</label>
            <input
              required
              name="title"
              type="text"
              className="form-control"
              placeholder="Author"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div class="mb-3">
            <label className={`form-label ${classes.label}`}>Image URL</label>
            <input
              required
              name="url"
              type="text"
              className="form-control"
              placeholder="Author"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="mb-3">
            <label className={`form-label ${classes.label}`}>Description</label>
            <textarea
              required
              name="desc"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddPost;

export async function action({ request }) {
  const data = await request.formData();
  const formData = {
    author: data.get("author"),
    title: data.get("title"),
    img: data.get("url"),
    description: data.get("desc"),
  };
  console.log(JSON.stringify(formData));
  const response = await fetch("http://localhost:5000/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return redirect("/posts");
}
