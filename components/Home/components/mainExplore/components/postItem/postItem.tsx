import React from "react";
import ProfileImage from "./components/profileImage/ProfileImage";
import PostData from "./components/postData/PostData";
import PostContent from "./components/postContent/PostContent";
import ActionsBar from "./components/actions/PostActions";
// import styles from "./postItem.scss";
// import "./postItem.scss";

const PostItem = () => {
  return (
    <div className="postItem flex gap-3 m-5">
      <div className="">
        <ProfileImage />
      </div>
      <div>
        <PostData />
        <PostContent />
        <ActionsBar />
      </div>
    </div>
  );
};

export default PostItem;
