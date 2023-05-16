import GreetingContainer from "@/components/shared/container/greeting/greetingContainer";
import React from "react";

const strings = [
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "こんにちは",
  "안녕하세요",
];
const aboutInfo = [
  {
    title: "About Me",
    image: null,
    description:
      "I am a software engineer with a passion for building things. I have experience in full stack development, and I am always looking to learn new things. I am currently looking for a full time position as a software engineer.",
  },
  {
    title: "Skills",
    image: null,
    description:
      "I have experience with React, Node, Express, MongoDB, PostgreSQL, and more. I am always looking to learn new things and improve my skills.",
  },
  {
    title: "Interests",
    image: null,
    description:
      "I am interested in full stack development, machine learning, and data science. I am always looking to learn new things and improve my skills.",
  },
];
const index = () => {
  return (
    <>
      {aboutInfo.map((info, index) => {
        return (
          <GreetingContainer
            key={index}
            index={index}
            text={info.description}
            title={info.title}
          />
        );
      })}
    </>
  );
};

export default index;
