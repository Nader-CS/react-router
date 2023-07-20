import React from "react";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Home;
