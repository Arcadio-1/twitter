import Image from "next/image";
import React from "react";
import {
  FaAngleDown,
  FaApple,
  FaRegEnvelope,
  FaUserCircle,
} from "react-icons/fa";

const RightSide = () => {
  return (
    <div className="border-gray-500 border-2 p-2 rounded-lg ml-3">
      <h2>New To Twitter</h2>
      <p>Sign up now to get your own personalized timeline!</p>
      <ul className="flex flex-col gap-3">
        <li className="flex items-center gap-2 bg-white text-black rounded-full py-1 px-3">
          <FaUserCircle size={50} color="gray" />
          <div className="w-full">
            <p className="text-sm font-bold">Sign in as you Gmail Account</p>
            <p className="flex items-end">
              something@gmail.com
              <FaAngleDown color="gray" />
            </p>
          </div>
          <FaRegEnvelope color="gray" size={40} />
        </li>
        <li className=" flex items-center justify-center gap-1 bg-white text-black rounded-full py-1 px-3">
          <FaApple color="black" size={25} />
          <p className="font-bold">Sign up with Apple</p>
        </li>
        <li className=" flex items-center justify-center gap-1 bg-white text-black rounded-full py-1 px-3">
          <p className="font-bold">Create account</p>
        </li>
      </ul>
      <p className="text-gray-400">
        By signing up, you agree to the Terms of Service and Privacy Policy,
        including Cookie Use.
      </p>
    </div>
  );
};

export default RightSide;
