import React from "react";
import Header from "./pages/Header";
import Post from "./pages/Post";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Header />
        <Post />
      </div>
    </>
  );
};
export default Home;
