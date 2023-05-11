import Link from "next/link";
import React from "react";
import { FaHashtag, FaEdit, FaCog, FaTwitter } from "react-icons/fa";

const Hedar = () => {
  return (
    <div>
      <ul className="w-auto flex flex-col gap-4 py-2 px-5">
        <li className="w-auto">
          <Link href={"."}>
            <div className="flex flex-grow-0 flex-shrink-0 items-center gap-1">
              <FaTwitter size={20} />
            </div>
          </Link>
        </li>
        <li className="w-auto">
          <Link href={"."}>
            <div className="flex flex-grow-0 flex-shrink-0 items-center gap-1">
              <FaHashtag />
              <span className="font-bold">Explore</span>
            </div>
          </Link>
        </li>
        <li className="w-auto">
          <Link href={"."}>
            <div className="flex flex-grow-0 flex-shrink-0 items-center gap-1">
              <FaCog />
              <span className="font-bold">Setting</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Hedar;
