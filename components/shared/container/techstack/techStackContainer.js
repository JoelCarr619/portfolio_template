import React from "react";
import StackIcons from "./techstack-components/stackIcons";
import StackTitle from "./techstack-components/stackTitle";

const TechStackContainer = () => {
  return (
    <div className="w-1/2 aspect-w-4 aspect-h-3 my-4 bg-[#400D51]  flex flex-col rounded-xl justify-center h-3/4 p-6 shadow-gray-500 shadow-lg">
      <div>
        <StackTitle />
        <StackIcons />
      </div>
    </div>
  );
};

export default TechStackContainer;
