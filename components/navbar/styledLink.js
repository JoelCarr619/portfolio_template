import Link from "next/link";
import React from "react";
import LinkTitle from "./linkTitle";
import { useRouter } from "next/router";

const StyledLink = ({ href, text }) => {
  const router = useRouter();
  console.log(router.pathname);
  const active = router.pathname === href;

  return (
    <Link
      style={{
        background: active ? "#FC4F00" : "#8B1874",
        color: active ? "black" : "#2CD3E1",
      }}
      className="underline hover:text-purple-700 border border-orange-500 shadow-2xl rounded-lg hover:bg-purple-600 transition-colors duration-300"
      href={href}
    >
      <LinkTitle text={text} />
    </Link>
  );
};

export default StyledLink;
