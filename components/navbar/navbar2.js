import Link from "next/link";
import React from "react";
import StyledLink from "./styledLink";

const Navbar2 = () => {
  return (
    <div
      style={{ height: "8vh" }}
      className="flex items-center justify-center w-full h-full font-bold overflow-x-auto"
    >
      <StyledLink href={"/"} text={"Home"} />
      <StyledLink href={"/about"} text={"About"} />
      <StyledLink href={"/contact"} text={"Contact"} />
      <StyledLink href={"/project"} text={"Project"} />
    </div>
  );
};

export default Navbar2;
