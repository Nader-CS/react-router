import React from "react";
import Header from "../../components/header/Header";
import classes from "./Error.module.css";

const Error = () => {
  return (
    <div>
      <Header />
      <div className={classes["about-container"]}>
        <div className={classes.about}>
          <h1>Error</h1>
          <p className={classes["about-text"]}>Something went error!</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
