import React from "react";
import Landing from "../components/landing";
import Highlights from "../components/Highlights";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";
import Featured from "../components/Featured";

const Home = () => {
  return (
    <div>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </div>
  );
};

export default Home;
