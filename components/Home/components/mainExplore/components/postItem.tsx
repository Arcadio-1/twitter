import Image from "next/image";
import React from "react";
import { FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa";

const PostItem = () => {
  return (
    <div className="flex gap-3 m-5">
      {/* left side */}
      <div>
        <div>
          <Image
            className="rounded-full"
            src={"/assets/image/profile_image/nika.jpeg"}
            width={50}
            height={50}
            alt="nika"
          />
        </div>
      </div>
      {/* right side */}
      <div>
        {/* Top Data */}
        <div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <span className="capitalize">nika shakarami</span>
              <span>@nikaShakarami-7</span>
              <span>. 12h</span>
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
          <div>
            <span>caption for telling something</span>
          </div>
        </div>
        {/* Media */}
        <div>
          <Image
            src={"/assets/image/post_images/post_image1.png"}
            alt="zan zxendgi azadi"
            width={500}
            height={400}
            className="border-2 border-gray-600 rounded-xl"
          />
        </div>
        {/* actions */}
        <div className="flex gap-10 mt-3 justify-start">
          <div className="flex items-center gap-2">
            <FaRegComment color="#777" name="Reply" title="Reply" />
            <span className="text-gray-400">2,754</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRetweet color="#777" name="Retweet" title="Retweet" />
            <span className="text-gray-400">2,754</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegHeart color="#777" name="Like" title="Like" />
            <span className="text-gray-400">2,754</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              title="view"
              src={"/assets/icons/statistics.svg"}
              alt="statistics"
              width={15}
              height={15}
            />
            <span className="text-gray-400">2,754</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              title="Share"
              src={"/assets/icons/share.svg"}
              alt="Share"
              width={18}
              height={15}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
