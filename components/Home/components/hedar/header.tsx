import Link from "next/link";
import React from "react";
import { FaHashtag, FaCog, FaTwitter, FaSearch } from "react-icons/fa";

const Hedar = () => {
  return (
    <div>
      <ul className="w-auto flex flex-col gap-4 py-2 px-5 items-end md:items-start">
        <li className="w-auto">
          <Link href={"."}>
            <div className="flex items-center gap-1">
              <FaTwitter size={20} />
            </div>
          </Link>
        </li>
        <li className="w-auto">
          <Link href={"."}>
            <div className="flex items-center gap-1">
              <div className="hidden md:inline">
                <FaHashtag />
              </div>
              <div className="inline md:hidden">
                <FaSearch />
              </div>
              <span className="font-bold hidden md:inline">Explore</span>
            </div>
          </Link>
        </li>
        <li className="w-auto">
          <Link href={"."}>
            <div className="flex items-center gap-1">
              <FaCog />
              <span className="font-bold  hidden md:inline">Setting</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Hedar;
