import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import FeaturedProjectimg1 from "../../public/images/projects/real-estate-cover-imagepng.png";
import FeaturedProjectimg2 from "../../public/images/projects/FileShare-web3-cover-image.png";
import Projectimg1 from "../../public/images/projects/Travel-agency-cover-image.png";
import Projectimg2 from "../../public/images/projects/Nextjs-portfolio-cover-image.png";

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark  dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] " />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer rounded-lg overflow-hidden lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw "
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:p-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium  text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark  dark:hover:bg-transparent dark:hover:text-light dark:hover:border-2 dark:hover:border-light sm:text-base sm:px-4"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <>
      <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark  dark:border-light xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light dark:border-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer rounded-lg overflow-hidden"
        >
          <Image
            src={img}
            alt={title}
            className="w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
              {title}
            </h2>
          </Link>
          <div className=" w-full mt-2 flex items-center justify-between">
            <Link
              href={link}
              target="_blank"
              className="text-lg font-semibold underline md:text-base"
            >
              Visit
            </Link>
            <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const projects = () => {
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
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination triumphs knowledge!"
            className="text-center mb-16 lg:!text-7xl sm:mb-8 sm:text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <div className="col-span-12">
              <FeaturedProjects
                type="Featured"
                title="Dwelling Real Estate Website"
                summary="This is a Real Estate Website made using ReactJS, NodeJS, Firebase, Razorpay, and TailwindCSS."
                img={FeaturedProjectimg1}
                link="https://securesharex-web3.vercel.app/"
                github="https://github.com/Raja543/RealEstate"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website Design"
                title="Travel Website"
                img={Projectimg1}
                link="https://ecommerce-website-raj.netlify.app/"
                github=" /"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Personal"
                title="Portfolio Website"
                img={Projectimg2}
                link="https://rajakumarportfolio.vercel.app/"
                github="https://github.com/Raja543/Next.js-Portfolio"
              />
            </div>
            <div className="col-span-12 ">
              <FeaturedProjects
                type="Featured"
                title="SecureShareX Web3 File Storage System"
                summary="This is a File Storage System made using ReactJS, Solidity, Web3, and IPFS."
                img={FeaturedProjectimg2}
                link="https://securesharex-web3.vercel.app/"
                github="https://github.com/Raja543/File-storage-system"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Featured"
                title="Travel Website"
                img={Projectimg1}
                link=""
                github=" /"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Featured"
                title="Travel Website"
                img={Projectimg2}
                link=""
                github=" /"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
