import React from "react";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className={""}>
      <Image
        className="rounded-full"
        src={"/assets/image/profile_image/nika.jpeg"}
        width={50}
        height={50}
        alt="nika"
      />
    </div>
  );
};

export default ProfileImage;
