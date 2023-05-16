import React from "react";
import StyledLink from "./styledLink";

const Navbar = () => {
  return (
    <div
      style={{ height: "7vh" }}
      className="flex items-center w-full  h-full px-4 space-x-4 border-0 text-xl font-bold"
    >
      <StyledLink href={"/"} text={"Home"} />
      <StyledLink href={"/about"} text={"About"} />
      <StyledLink href={"/contact"} text={"Contact"} />
      <StyledLink href={"/project"} text={"Project"} />
    </div>
  );
};

export default Navbar;
