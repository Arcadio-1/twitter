import React from "react";
import { post_actions_icon } from "../../../../../../../types/icons_interfaces";

const Statistics_icon = ({ size = 20 }: post_actions_icon) => {
  const sizer = `${size}px`;
  return (
    <div
      className="postItem_action_item_icon"
      style={{ height: sizer, width: sizer }}
    >
      <svg viewBox="0 0 165.278 161.513">
        <g id="statistics" transform="translate(-71.418 -138.657)">
          <rect
            className="transition-all duration-300"
            id="Rectangle_207"
            width="32.87"
            height="116.472"
            transform="translate(203.827 183.698)"
          />
          <rect
            className="transition-all duration-300"
            id="Rectangle_208"
            width="32.87"
            height="161.513"
            transform="translate(159.691 138.657)"
          />
          <rect
            className="transition-all duration-300"
            id="Rectangle_209"
            width="32.87"
            height="96.431"
            transform="translate(115.554 203.739)"
          />
          <rect
            className="transition-all duration-300"
            id="Rectangle_210"
            width="32.87"
            height="161.513"
            transform="translate(71.418 138.657)"
          />
        </g>
      </svg>
    </div>
  );
};

export default Statistics_icon;
