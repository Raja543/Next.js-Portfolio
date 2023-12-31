import React from "react";
import Head from "next/head";
import Image from "next/image";
import Skills from "@/components/Skills";
import Layout from "@/components/Layout";
import Experience from "@/components/Experience";
import AnimatedText from "@/components/AnimatedText";
import ProfilePic2 from "../../public/images/profile/developer-pic-2.jpg";
import TransitionEffect from "@/components/TransitionEffect";
import Education from "@/components/Education";

const about = () => {
  return (
    <>
      <Head>
        <title>Portfolio website</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This is a portfolio Website created using Nextjs, TailwindCSS and Framer-motion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Portfolio Website" />
        <meta
          property="og:description"
          content="This is a portfolio Website created using Nextjs, TailwindCSS and Framer-motion"
        />
        <meta property="og:image" content="/weblogo.png" />
        <meta
          property="og:url"
          content="https://rajakumarportfolio.vercel.app/"
        />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 !text-center"
          />
          <div className="grid grid-cols-8 gap-16 mx-auto sm:gap-8 ">
            <div className="col-span-5 lg:col-span-8 lg:order-2 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi , I&apos;m Raja Kumar, a highly detail-oriented Full Stack
                Web Developer from New Delhi, India. My passion lies in crafting
                top-notch websites, and I specialize in working with HTML, CSS,
                and JavaScript, alongside popular frameworks like Bootstrap,
                ReactJs, TailwindCSS, Node.js, and ExpressJS.
              </p>
              <p className="font-medium my-4">
                My expertise extends to a range of databases, including
                Firebase, MySQL, and MongoDB. I&apos;m a strong advocate for
                teamwork and open communication, leveraging diverse perspectives
                to achieve exceptional results. With solid time management
                skills, I ensure projects are completed efficiently while
                maintaining the highest quality standards.
              </p>
              <p className="font-medium">
                My problem-solving abilities and a continuous learning mindset
                enable me to find creative solutions to complex challenges. If
                you&apos;re seeking a skilled and dedicated Full Stack Web
                Developer to bring your vision to life, I&apos;d be thrilled to
                discuss how I can contribute to your next project.
              </p>
            </div>

            <div className="col-span-3 lg:col-span-8 lg:flex lg:items-center lg:order-1 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] bg-dark rounded-2xl dark:bg-light" />
              <Image
                src={ProfilePic2}
                alt="profile-pic"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw "
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
