import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-32 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight ">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-13vw" y="-6vw" />
        <Skill name="CSS" x="13vw" y="-2vw" />
        <Skill name="Javascript" x="-3vw" y="12vw" />
        <Skill name="Bootstrap" x="16vw" y="-15vw" />
        <Skill name="Tailwind CSS" x="39vw" y="9vw" />
        <Skill name="ReactJS" x="-23vw" y="1vw" />
        <Skill name="EditorJS" x="-15vw" y="20vw" />
        <Skill name="NodeJS" x="14vw" y="20vw" />
        <Skill name="ExpressJS" x="-35vw" y="-12vw" />
        <Skill name="MongoDB" x="25vw" y="-19vw" />
        <Skill name="MYSQL" x="-25vw" y="10vw" />
        <Skill name="Firebase" x="-35vw" y="-24vw" />
        <Skill name="Docker" x="-15vw" y="-19vw" />
        <Skill name="AWS" x="-25vw" y="-16vw" />
        <Skill name="GIT" x="-35vw" y="-18vw" />
        <Skill name="Postman" x="-15vw" y="-12vw" />
        <Skill name="Figma" x="-15vw" y="-20vw" />
      </div>
    </>
  );
};

export default Skills;