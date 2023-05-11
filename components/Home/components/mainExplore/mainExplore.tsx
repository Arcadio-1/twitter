import React from "react";
import PostItem from "./components/postItem";

const MainExplore = () => {
  return (
    <main>
      <div className=" border-2 border-gray-600 rounded-lg">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </main>
  );
};

export default MainExplore;
