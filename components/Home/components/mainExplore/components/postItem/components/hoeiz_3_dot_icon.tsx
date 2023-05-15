import React from "react";
import { post_actions_icon } from "@/components/Home/types/icons_interfaces";

const Horiz_3_dot_icon = ({ size }: post_actions_icon) => {
  return (
    <svg
      fill="none"
      height={` ${size} ? ${size} : "20" `}
      viewBox="0 0 20 20"
      width={` ${size} ? ${size} : "20" `}
    >
      <path
        d="M6 10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8C5.10457 8 6 8.89543 6 10Z"
        fill={` "#888" `}
      />
      <path
        d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
        fill={`"#888" `}
      />
      <path
        d="M16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12Z"
        fill={`"#888" `}
      />
    </svg>
  );
};

export default Horiz_3_dot_icon;
