import React from "react";
import Share_icon from "../../components/actions/icons/share_icon";
import Statistics_icon from "../../components/actions/icons/statistics_icon";
import Comment_icon from "../../components/actions/icons/comment_icon";
import Retweet_icon from "../../components/actions/icons/retweet_icon";
import Like_icon from "../../components/actions/icons/like_icon";
const ActionsBar = () => {
  return (
    <div className="postItem_action">
      <div id="comment">
        {" "}
        <div className="postItem_action_item">
          <Comment_icon size={22} />
          <span>2,754</span>
        </div>
      </div>

      <div id="retweet">
        {" "}
        <div className="postItem_action_item">
          <Retweet_icon size={23} />
          <span>27K</span>
        </div>
      </div>

      <div id="like">
        {" "}
        <div className="postItem_action_item">
          <Like_icon size={23} />
          <span>27K</span>
        </div>
      </div>

      <div id="statistics">
        <div className="postItem_action_item">
          <Statistics_icon size={22} />
          <span>2,754K</span>
        </div>
      </div>
      <div id="share">
        <div className="postItem_action_item">
          <Share_icon size={23} />
        </div>
      </div>
    </div>
  );
};

export default ActionsBar;
