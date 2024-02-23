import React from "react";
import Divided from "../dividedSection";
import { MdOutlineMenu, MdSearch } from "react-icons/md";
import Link from "next/link";
import FooterItems from "./FooterItems";
import FooterLogo from "./FooterLogo";
import FooterConnect from "./FooterConnect";

const Footer = () => {
  return (
    <footer className="mt-14 w-full bg-slate-900 py-12">
      <div className="ease max-w-screen-5xl px-0 text-slate-50 transition-all duration-[.4s] sm:px-4 md:px-14 5xl:mx-auto">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-full xl:col-span-4">
            <FooterLogo />
          </div>
          <div className="flex md:col-span-9 md:justify-between md:gap-4 xl:col-span-5">
            <FooterItems
              isMenu={true}
              title="About"
              links={[
                "Privacy Policy",
                "Term And Condition",
                "About",
                "Contact",
              ]}
            />
            <FooterItems
              isCat={true}
              title="Categories"
              links={[
                "Home",
                "Technology",
                "Health",
                "Travel",
                "How to and Tutorial",
                "Culture",
              ]}
            />
          </div>
          <div className="md:col-span-3 xl:col-span-3">
            <FooterConnect />
          </div>
        </div>
        <div className="w-full">
          <p className="prose mt-10 text-center text-sm text-slate-500 md:text-left">
            All rights reserved ©{" "}
            <span className="underline underline-offset-4">Life Tech Hub</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
