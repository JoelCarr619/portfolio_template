import GreetingContainer from "/components/shared/container/greeting/greetingContainer";
import React from "react";
import TechStackContainer from "components/shared/container/techstack/techStackContainer.js";

const Joel2 = "/Joel2.JPG";

const aboutInfo = [
  {
    title: "About Me",
    image: Joel2,
    description:
      "I am a software engineer with a passion for building things. I have experience in full stack development, and I am always looking to learn new things. I am currently looking for a full time position as a software engineer.",
  },
  {
    title: "Skills",
    image: "/Joel3.JPG",
    description:
      "I have experience with React, Node, Express, MongoDB, PostgreSQL, and more. I am always looking to learn new things and improve my skills.",
  },
  {
    title: "Interests",
    image: "/Joel1.JPG",
    description:
      "I am interested in full stack development, machine learning, and data science. I am always looking to learn new things and improve my skills.Throughout my level of interest I've always wanted to show case my skills and what I've learned as a full stack developer.",
  },
];

const About = () => {
  return (
    <>
      {aboutInfo.map((info, index) => {
        return (
          <GreetingContainer
            key={index}
            index={index}
            image={info.image}
            text={info.description}
            title={info.title}
          >
            {info.title}
          </GreetingContainer>
        );
      })}
      <TechStackContainer />
    </>
  );
};

export default About;
