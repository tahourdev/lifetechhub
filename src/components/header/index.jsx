"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { clsx } from "clsx";
import Divided from "@/components/dividedSection";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = toggle ? "hidden" : "auto";
    };

    // Add event listener to handle body scroll when the component mounts
    handleBodyScroll();

    return () => {
      // Remove event listener when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  const handleClickMenu = (index) => {
    setToggle(false);
    setActive(index);
  };

  return (
    <header className="ease max-w-screen-5xl px-0 transition-all duration-[.4s] sm:px-4 md:px-14 5xl:mx-auto">
      <div className="flex items-center justify-between ">
        <Link href="/" onClick={() => handleClickMenu(null)}>
          <Logo />
        </Link>
        <nav className="relative pb-4 pt-2">
          <ul className="hidden items-center gap-8 font-outfit text-sm font-medium text-slate-600 3xl:flex">
            {["Privacy Policy", "Term And Condition", "About", "Contact"].map(
              (menu, index) => (
                <li onClick={() => handleClickMenu(index)} key={index}>
                  <Link
                    className={clsx(
                      `relative block py-4 transition-all duration-300 ease-in`,
                    )}
                    href={`/${menu.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {menu}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <div
            className="flex cursor-pointer px-2 py-4 3xl:hidden"
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? (
              <MdOutlineClose size={23} />
            ) : (
              <MdOutlineMenu size={23} />
            )}
          </div>
        </nav>
        <ul
          className={clsx(
            `absolute right-0 top-24 z-50 flex min-h-screen w-full transform
          flex-col items-start bg-sky-100/80 font-outfit text-base font-medium text-slate-600 backdrop-blur-md
          transition-transform duration-300 ease-in 3xl:hidden`,
            !toggle && "-translate-x-full",
          )}
        >
          {["Privacy Policy", "Term And Condition", "About", "Contact"].map(
            (menu, index) => (
              <li
                key={index}
                className={clsx(
                  `relative w-full cursor-pointer border-b-[1px] border-gray-400/20`,
                )}
              >
                <Link
                  className={clsx(
                    `block py-4 pl-6 hover:bg-sky-50`,
                    active === index && "mobile_nav-active bg-blue-100",
                  )}
                  onClick={() => handleClickMenu(index)}
                  href={`/${menu.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {menu}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
      <Divided />
    </header>
  );
};

export default Header;
