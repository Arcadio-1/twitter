import React from "react";
import Header from "./components/hedar/header";
import MainExplore from "./components/mainExplore/mainExplore";
import RightSide from "./components/rightSide/rightSide";
import Down_banner from "./components/downBanner/down_banner";
export const name = "max";
export const age = "30";

const Home = () => {
  return (
    <div className="flex">
      <div className="min-w-[10rem]">
        <Header />
      </div>
      <div>
        <MainExplore />
      </div>
      <div className="max-w-[25rem] min-w-[10rem] hidden lg:inline">
        <RightSide />
      </div>
      <div className="fixed left-0 w-full bg-sky-500 bottom-0">
        <Down_banner />
      </div>
    </div>
  );
};

export default Home;
