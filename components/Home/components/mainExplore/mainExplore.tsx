import React from "react";
import PostItem from "./components/postItem/postItem";
import { FaCog } from "react-icons/fa";

const MainExplore = () => {
  return (
    <div className="relative border-x border-gray-600 min-w-[500px]">
      <div className="">
        <div className="absolute top-0 left-0 max-w-[1748px] flex items-center justify-between bg-gray-900  backdrop-blur-sm w-full bg-opacity-70 px-3">
          <h2 className="font-bold text-lg z-20">Explore</h2>
          <FaCog color="#ddd" />
        </div>
        <div className="pt-8">
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </div>
      </div>
    </div>
  );
};

export default MainExplore;
