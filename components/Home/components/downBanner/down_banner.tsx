import React from "react";

const Down_banner = () => {
  return (
    <div className="flex justify-center items-center gap-5 p-2">
      <div>
        <p className="font-bold text-xl">Don’t miss what’s happening</p>
        <p className="font-thin">People on Twitter are the first to know.</p>
      </div>
      <div className="flex gap-2">
        <button className="border-[1px] border-[#ffffff7b] rounded-[20px] py-[4px] px-3 font-bold text-sm bg-sky-500">
          Log in
        </button>
        <button className="border-[1px] border-[#ffffff7b] rounded-[20px] py-[4px] px-3 font-bold text-sm text-gray-900 bg-gray-100">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Down_banner;
