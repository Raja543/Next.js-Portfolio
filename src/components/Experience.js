import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <li
      ref={ref}
      className="my-4 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] "
    >
      <LiIcon reference={ref} scrollYProgress={scrollYProgress} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize my-2 font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} &nbsp; | &nbsp; {address}
        </span>
        <p className="font-medium w-full my-2 md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
    layoutEffect: false,
  });
  return (
    <div className="my-32 sm:my-20">
      <h2 className="font-bold text-8xl mb-12 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="React Developer "
            companyLink="https://www.findflames.com/"
            company="Find Flames"
            time="May 2023 - July 2023"
            address="New Delhi, India"
            work="I independently developed and launched the Find Flames website using technologies like ReactJS, EditorJS, and Firebase. Additionally, I collaborated with cross-functional teams on two client projects, gaining hands-on experience in agile development and honing my skills in ReactJS, TailwindCSS, EditorJS, and Firebase. This experience has equipped me with a deep understanding of web development and the ability to create user-centric digital solutions through effective project management and teamwork."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
