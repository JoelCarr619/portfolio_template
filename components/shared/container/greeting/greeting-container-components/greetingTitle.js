import React from "react";

const greetingTitle = ({ title }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex text-[#F79540] text-2xl font-extrabold shadow-2xl ">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default greetingTitle;
