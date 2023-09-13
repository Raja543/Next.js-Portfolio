import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
      xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-44 w-full text-center md:text-6xl md:mt-32 xs:text-4xl sm:mt-20">
        Skills
      </h2>
      <div
        className="w-full mt-8 h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm 
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer  dark:bg-light dark:text-dark  lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-10vw" y="-6vw" />
        <Skill name="CSS" x="13vw" y="-2vw" />
        <Skill name="Javascript" x="3vw" y="9vw" />
        <Skill name="Bootstrap" x="16vw" y="-15vw" />
        <Skill name="Tailwind CSS" x="39vw" y="9vw" />
        <Skill name="ReactJS" x="-23vw" y="1vw" />
        <Skill name="EditorJS" x="-15vw" y="20vw" />
        <Skill name="NodeJS" x="14vw" y="20vw" />
        <Skill name="ExpressJS" x="-35vw" y="-12vw" />
        <Skill name="MongoDB" x="28vw" y="-2vw" />
        <Skill name="MYSQL" x="-25vw" y="10vw" />
        <Skill name="Firebase" x="25vw" y="-24vw" />
        <Skill name="Docker" x="-15vw" y="10vw" />
        <Skill name="AWS" x="16vw" y="10vw" />
        <Skill name="GIT" x="-30vw" y="-20vw" />
        <Skill name="Postman" x="-15vw" y="-12vw" />
        <Skill name="Figma" x="-15vw" y="-20vw" />
      </div>
    </>
  );
};

export default Skills;
