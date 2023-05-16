import React from "react";

const GreetingText = ({ text, index }) => {
  return (
    <div className="flex">
      <span
        // style={{ color: index % 2 === 0 ? "white" : "red" }}
        className="flex items-center justify-center w-full h-full font-mono text-xl font-extrabold text-center lg:text-left md:text-left sm:text-center md:ml-2  text-[#31E1F7] "
      >
        {text}
      </span>
    </div>
  );
};

export default GreetingText;
