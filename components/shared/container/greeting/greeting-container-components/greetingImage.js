import React from "react";
import Image from "next/image";

const GreetingImage = ({ image }) => {
  return (
    <div className="w-64 h-64 flex items-center justify-center">
      {image && (
        <div className="w-60 h-60 relative">
          <Image
            style={{ borderRadius: "100%" }}
            src={image}
            fill={true}
            alt="profile picture"
          />
        </div>
      )}
    </div>
  );
};

export default GreetingImage;
