import React from "react";
import Image from "next/image";
const PostContent = () => {
  return (
    <div>
      <div className="mb-3">
        <span className="">caption for telling something</span>
      </div>
      <div>
        <Image
          src={"/assets/image/post_images/post_image1.png"}
          alt="zan zxendgi azadi"
          width={500}
          height={400}
          className="border-2 border-gray-600 rounded-xl"
        />
      </div>
    </div>
  );
};

export default PostContent;
