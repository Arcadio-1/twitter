import React from "react";
import Header from "./components/header";
import MainExplore from "./components/mainExplore/mainExplore";
import RightSide from "./components/rightSide/rightSide";
import Down_banner from "./components/down_banner";
export const name = "max";
export const age = "30";

const Home = () => {
  return (
    <div className="flex">
      <div className="min-w-[15rem]">
        <Header />
      </div>
      <div>
        <MainExplore />
      </div>
      <div className="max-w-[25rem]">
        <RightSide />
      </div>
      <div className="fixed w-full bg-sky-400 bottom-0">
        <Down_banner />
      </div>
    </div>
  );
};

export default Home;
