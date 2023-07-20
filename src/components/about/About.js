import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes["about-container"]}>
      <div className={classes.about}>
        <h1>Hello There!</h1>
        <p className={classes["about-text"]}>
          This is a Routing Project Version{" "}
          <span className={classes.version}>6.14.2</span>
        </p>
      </div>
    </div>
  );
};

export default About;
