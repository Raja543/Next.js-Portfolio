import React from "react";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between ">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} &nbsp; | &nbsp; {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-40">
      <h2 className="font-bold text-8xl mb-20 w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <div className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top" />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="React Developer Intern"
            companyLink="https://www.findflames.com/"
            company="Find Flames"
            time="May 2023 - July 2023"
            address="New Delhi, India"
            work="Developed and launched the Find Flames website independently with leveraging technologies such as ReactJS , EditorJS and Firebase. Collaborated with a team of developers on two client projects, contributing to successful outcomes and gaining hands-on experience in agile development methodologies and cross-functional teamwork. Acquired a deep understanding of web development, strengthened proficiency in ReactJS , TailwindCSS , EditorJS , Firebase and gained valuable insights into creating user-centric digital solutions through effective collaboration and project management."
          />
          <Details
            position="React Developer Intern"
            companyLink="https://www.findflames.com/"
            company="Find Flames"
            time="May 2023 - July 2023"
            address="New Delhi, India"
            work="Developed and launched the Find Flames website independently with leveraging technologies such as ReactJS , EditorJS and Firebase. Collaborated with a team of developers on two client projects, contributing to successful outcomes and gaining hands-on experience in agile development methodologies and cross-functional teamwork. Acquired a deep understanding of web development, strengthened proficiency in ReactJS , TailwindCSS , EditorJS , Firebase and gained valuable insights into creating user-centric digital solutions through effective collaboration and project management."
          />
          <Details
            position="React Developer Intern"
            companyLink="https://www.findflames.com/"
            company="Find Flames"
            time="May 2023 - July 2023"
            address="New Delhi, India"
            work="Developed and launched the Find Flames website independently with leveraging technologies such as ReactJS , EditorJS and Firebase. Collaborated with a team of developers on two client projects, contributing to successful outcomes and gaining hands-on experience in agile development methodologies and cross-functional teamwork. Acquired a deep understanding of web development, strengthened proficiency in ReactJS , TailwindCSS , EditorJS , Firebase and gained valuable insights into creating user-centric digital solutions through effective collaboration and project management."
          />
          <Details
            position="React Developer Intern"
            companyLink="https://www.findflames.com/"
            company="Find Flames"
            time="May 2023 - July 2023"
            address="New Delhi, India"
            work="Developed and launched the Find Flames website independently with leveraging technologies such as ReactJS , EditorJS and Firebase. Collaborated with a team of developers on two client projects, contributing to successful outcomes and gaining hands-on experience in agile development methodologies and cross-functional teamwork. Acquired a deep understanding of web development, strengthened proficiency in ReactJS , TailwindCSS , EditorJS , Firebase and gained valuable insights into creating user-centric digital solutions through effective collaboration and project management."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
