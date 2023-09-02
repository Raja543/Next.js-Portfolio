import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span> {new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center justify-center ">
          Build with <span className="text-primary text-2xl px-1">&#9825;</span>
          by&nbsp;
          <Link
            href="https://mynameisraja.com"
            target={"_blank"}
            className="underline underline-offset-2"
          >
            Raja
          </Link>
        </div>
        <Link
          href="https://mynameisraja.com"
          target={"_blank"}
          className="underline underline-offset-2"
        >
          Raja
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
