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
      className="my-4 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize my-2 font-medium text-dark/75">
          {time} &nbsp; | &nbsp; {place}
        </span>
        <p className="font-medium w-full my-2">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-20">
      <h2 className="font-bold text-8xl mb-12 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor Of Computer Application"
            time="Nov 2020 - May 2023"
            place="Galgotias University"
            info="Relevant courses included Operating Systems, Computer Networks, Database Management Systems, Programming Languages, and Data Structures and Algorithms."
          />
          <Details
            type="Bachelor Of Computer Application"
            time="Nov 2023 - May 2023"
            place="Galgotias University"
            info="Relevant courses included Operating Systems, Computer Networks, Database Management Systems, Programming Languages, and Data Structures and Algorithms."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
