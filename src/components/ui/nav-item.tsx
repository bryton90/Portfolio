'use client';
import Link from 'next/link';
import React, { MouseEvent } from 'react';

type Props = {
  title: string;
  href: string;
  selected?: boolean;
};

export const NavItem = ({ title, href, selected }: Props) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Link 
      className={`
        whitespace-nowrap px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
        ${selected 
          ? 'text-yellow-500 bg-yellow-500 bg-opacity-10' 
          : 'text-white hover:bg-white hover:bg-opacity-10'
        }
      `} 
      href={href} 
      onClick={handleClick}
    >
      {title}
    </Link>
  );
};
