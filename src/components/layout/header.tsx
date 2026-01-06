'use client';
import React, { useEffect, useState } from 'react';
import { NavItem } from '../ui/nav-item';
const nav: {
  id: string;
  name: string;
}[] = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>();

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      for (const navItem of nav) {
        const element = document.getElementById(navItem.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = navItem.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 bg-black bg-opacity-80 shadow z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between h-14">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start overflow-x-auto">
            <div className="flex space-x-1 sm:space-x-2 px-2 lg:px-0">
              {nav.map((item) => (
                <NavItem 
                  key={item.id} 
                  title={item.name} 
                  href={`#${item.id}`} 
                  selected={item.id === activeSection} 
                />
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
