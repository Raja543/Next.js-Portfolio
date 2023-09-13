import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
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
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start">
        <Layout className="pt-0 md:pt-16 ">
          <div className="flex items-start justify-between w-full md:flex-col ">
            <div className="w-1/2 md:w-full lg:hidden md:inline-block">
              <Image
                src={profilePic}
                alt="profile-pic"
                className="w-full h-auto "
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw "
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs md:text-justify">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Raja's Resume.pdf"
                  // download={true}
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid 
                  border-transparent hover:border-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base "
                >
                  Resume <LinkArrow className={"ml-1 w-6"} />
                </Link>
                <Link
                  href="mailto:rajakumarmahto952@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline underline-offset-4 dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <div className="absolute right-8 bottom-8 inline-block w-24 md:top-4 md:right-2 md:w-12">
          <Image
            src={LightBulb}
            alt="profile-pic"
            className="w-full h-auto"
            priority
          />
        </div>
      </main>
    </>
  );
}
