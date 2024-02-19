import React from "react";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";

const Menu = () => {
  return (
    <ul className="hidden items-center gap-8 3xl:flex">
      {[
        "Privacy",
        "Term of Use",
        "Disclaimer",
        "Sitemap",
        "About Us",
        "Contact Us",
      ].map((menu, index) => (
        <li key={index}>
          <Link
            className="font-outfit text-[10px] font-medium text-slate-600"
            href="/"
          >
            {menu}
          </Link>
        </li>
      ))}
      <div className="flex 3xl:hidden">
        <MdOutlineMenu />
      </div>
    </ul>
  );
};

export default Menu;
