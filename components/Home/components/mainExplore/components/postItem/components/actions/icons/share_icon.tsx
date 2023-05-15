import * as React from "react";
import { post_actions_icon } from "../../../../../../../types/icons_interfaces";

const Share_icon = ({ size = 20 }: post_actions_icon) => {
  const sizer = `${size}px`;
  return (
    <div
      className="postItem_action_item_icon"
      style={{ height: sizer, width: sizer }}
    >
      <svg viewBox="0 0 256 256">
        <rect fill="none" height="256" width="256" />
        <polyline
          className="transition-all duration-300"
          fill="none"
          points="176 152 224 104 176 56"
          // stroke={`${color}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <path
          className="transition-all duration-300"
          d="M192,216H40a8,8,0,0,1-8-8V88"
          fill="none"
          // stroke={`${color}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <path
          className="transition-all duration-300"
          d="M75,176a96.1,96.1,0,0,1,93-72h56"
          fill="none"
          // stroke={`${color}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
      </svg>
    </div>
  );
};

export default Share_icon;
