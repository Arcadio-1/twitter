import React from "react";
import Image from "next/image";
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
          <Image
            priority={false}
            src={"/assets/icons/horiz_3_dots.svg"}
            alt="menu"
            width={20}
            height={10}
          />
        </div>
      </div>
    </div>
  );
};

export default PostData;
