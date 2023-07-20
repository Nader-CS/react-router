import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigation, Form, useLoaderData, redirect } from "react-router-dom";
import classes from "./EditPost.module.css";
import Error from "../error/Error";
const EditPost = () => {
  const data = useLoaderData();
  const [values, setvalues] = useState({
    author: data.author,
    title: data.title,
    img: data.img,
    desc: data.description,
  });
  const navigation = useNavigation();
  const isSubmitting =
    navigation.state == "submitting" || navigation.state != "idle";
  console.log(isSubmitting);
  if (data.isError) {
    return <Error />;
  }
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
              defaultValue={data.author}
              onInput={(e) => {
                setvalues((prev) => {
                  return { ...prev, author: e.target.value };
                });
              }}
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
              defaultValue={data.title}
              onInput={(e) => {
                setvalues((prev) => {
                  return { ...prev, title: e.target.value };
                });
              }}
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
              defaultValue={data.img}
              onInput={(e) => {
                setvalues((prev) => {
                  return { ...prev, img: e.target.value };
                });
              }}
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
              defaultValue={data.description}
              onInput={(e) => {
                setvalues((prev) => {
                  return { ...prev, desc: e.target.value };
                });
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={
              values.author == data.author &&
              values.title == data.title &&
              values.img == data.img &&
              values.desc == data.description
            }
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default EditPost;

export async function loader({ params }) {
  const id = params.id;
  const response = await fetch(`http://localhost:5000/posts/${id}`);
  if (!response.ok) {
    throw { isError: true };
  }
  return response;
}

export async function action({ request, params }) {
  const id = params.id;
  const data = await request.formData();
  const formData = {
    author: data.get("author"),
    title: data.get("title"),
    img: data.get("url"),
    description: data.get("desc"),
  };
  console.log(JSON.stringify(formData));
  const response = await fetch(`http://localhost:5000/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return redirect("/posts");
}
