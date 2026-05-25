'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaStar } from 'react-icons/fa';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const getLinkClass = (path: string): string => {
    const isActive = pathname === path;
    return `transition-all duration-500 whitespace-nowrap ${
      isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
    }`;
  };

  const navTextStyle =
    "font-['Arno_Pro'] text-[14px] font-medium tracking-[0.05em] uppercase text-white";

  return (
    <>
      <nav
        className={`absolute top-0 left-0 w-full z-[9999] px-6 md:px-12 pt-6 pb-4 bg-transparent ${className ?? ''}`}
      >
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/serenica"
            className="text-white text-xl md:text-3xl font-serif tracking-tighter hover:opacity-70 transition-opacity leading-none"
          >
            SERENICA
          </Link>

          {/* Desktop Links */}
         <div className="hidden lg:flex items-center space-x-6 text-white xl:space-x-8">
  <a href="#about"     className={`${navTextStyle}`}>ABOUT</a>
  <a href="#services"  className={`${navTextStyle}`}>SERVICES</a>
  <a href="#resources" className={`${navTextStyle}`}>RESOURCES</a>
  <a href="#contact"   className={`${navTextStyle}`}>CONTACT</a>

  
            {/* Get Started Button */}
            <Link
              href="/rewards"
              className={`
                flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border
                font-['Arno_Pro'] text-[13px] font-medium tracking-[0.06em] uppercase
                transition-all duration-300
                ${pathname === '/rewards'
                  ? 'bg-amber-500 border-amber-500 text-white'
                  : 'border-amber-400 text-amber-700 hover:bg-amber-500 hover:border-amber-500 hover:text-white'}
              `}
            >
              <FaStar className="w-2.5 h-2.5" />
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white text-[12px] font-medium tracking-widest uppercase"
            >
              {isOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[10000] bg-[#fcfaf7] transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-700 ease-in-out lg:hidden`}
      >
        <div className="h-full flex flex-col p-10">
          <div className="flex justify-between items-center mb-16">
            <Link
              href="/"
              onClick={toggleMenu}
              className="text-2xl font-serif text-white"
            >
              SERENICA
            </Link>
            <button
              onClick={toggleMenu}
              className="text-[12px] font-medium tracking-widest text-white"
            >
              CLOSE
            </button>
          </div>

          <div className="flex flex-col space-y-6 text-center">
            {(['cafe', 'shop', 'community', 'blog', 'work', 'book', 'voucher'] as const).map(
              (path) => (
                <Link
                  key={path}
                  href={`/${path}`}
                  onClick={toggleMenu}
                  className="text-[18px] font-medium uppercase tracking-widest text-white  font-['Arno_Pro']"
                >
                  {path.replace('-', ' ')}
                </Link>
              )
            )}

            <Link
              href="/rewards"
              onClick={toggleMenu}
              className="flex items-center justify-center gap-2 mx-auto px-6 py-2.5 rounded-full border border-amber-400 text-amber-700 text-[15px] font-medium uppercase tracking-widest font-['Arno_Pro'] hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-300"
            >
              <FaStar className="w-3 h-3" />
              Rewards
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
