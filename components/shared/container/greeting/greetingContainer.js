import React from "react";
import Image from "next/image";
import GreetingImage from "./greeting-container-components/greetingImage";
import GreetingText from "components/shared/container/greeting/greeting-container-components/GreetingText.js";
import GreetingTitle from "./greeting-container-components/greetingTitle";

const GreetingContainer = ({ text, title, index, image }) => {
  return (
    <div className="sm:w-full md:w-full lg:w-1/2 w-full sm:h-auto md:h-full lg:h-full aspect-w-4 aspect-h-3 my-4 bg-[#400D51] flex flex-col items-center rounded-xl justify-center p-6 shadow-gray-500 shadow-lg">
      <GreetingTitle title={title} />
      <div className="flex flex-col items-center mt-4 sm:flex-row sm:mt-1">
        <GreetingText text={text} image={image} index={index} />
        <GreetingImage image={image} />
      </div>
    </div>
  );
};

export default GreetingContainer;
