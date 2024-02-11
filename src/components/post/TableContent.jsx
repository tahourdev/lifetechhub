'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const TableContent = ({ contents }) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const contentTable = contents.map((text) => {
    if (text.type === 'heading-two') {
      const link = text.id;

      {
        return (
          <li>
            <Link
              className='font-normal px-2 hover:text-red-400 cursor-pointer'
              activeClass='active'
              spy={true}
              // offset={-70}
              duration={500}
              to={link}>
              {text.children.map((headingText) => headingText.text)}
            </Link>
          </li>
        );
      }
    }
    return null;
  });
  // console.log(headingText || []);
  return (
    <div
      className={`${
        isSticky ? 'top-14 opacity-100' : 'top-32 opacity-0'
      } relative transition-all duration-300 ease-linear border-r-2 border-slate-300/50`}>
      <ul className='prose prose-a:no-underline prose-a:text-slate-600'>{contentTable}</ul>
    </div>
  );
};

export default TableContent;
