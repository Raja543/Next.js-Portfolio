import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-4 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize my-2 font-medium text-dark/75 dark:text-light/75 xs:text-s">
          {time} &nbsp; | &nbsp; {place}
        </span>
        <p className="font-medium w-full my-2 md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  return (
    <div className="my-20">
      <h2 className="font-bold text-8xl mb-12 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor Of Computer Application"
            time="Nov 2020 - May 2023"
            place="Galgotias University"
            info="Relevant courses included Operating Systems, Computer Networks, Database Management Systems, Programming Languages, and Data Structures and Algorithms."
          />
          <Details
            type="Class 12th"
            time="April 2019 - March 2020"
            place="A A M Children's Academy"
            info="Relevant courses included Physics, Chemistry, Mathematics, and Computer Science."
          />
          <Details
            type="Class 10th"
            time="April 2017 - March 2018"
            place="A A M Children's Academy"
            info="Relevant courses included Science, Mathematics, English , Hindi and Computer Science."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
