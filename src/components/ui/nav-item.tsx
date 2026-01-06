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
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    console.log('Attempting to scroll to:', targetId, 'Found element:', target);
    if (target) {
      const headerHeight = 56; // Approximate header height (h-14 = 56px)
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.error('Element not found:', targetId);
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
