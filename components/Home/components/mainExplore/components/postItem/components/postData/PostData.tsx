import React from "react";
import Image from "next/image";
import Horiz_3_dot_icon from "../hoeiz_3_dot_icon";
const PostData = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <span className="capitalize">nika shakarami</span>
          <span className="text-gray-500">@nikaShakarami-7</span>
          <span className="text-gray-500">. 12h</span>
        </div>
        <div>
          <Horiz_3_dot_icon />
        </div>
      </div>
    </div>
  );
};

export default PostData;
