import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContexts';
import logoDarkMode from '/assets/logos/logo-with-text-dark-mode.webp';
import logoLightMode from '/assets/logos/logo-with-text-light-mode.webp';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='px-1 py-1 flex items-center sticky top-0 bg-white shadow-lg backdrop-blur-[1.75px] z-[999] dark:bg-gray-800 dark:text-slate-200 scroll-smooth'>
      <a href='/'>
        <img
          src={isDarkMode ? logoDarkMode : logoLightMode}
          alt="logo"
          className="w-48 md:w-96 h-12 md:h-20 transition ease-in-out transition-transform-[0.3s] cursor-pointer"
        />
      </a>

      <div className="hidden md:flex items-center space-x-1 ml-4">
        <Link
          to="video-player"
          smooth={true}
          duration={500}
          className="py-4 px-3 hover:text-red-600 font-medium transition-all duration-300 cursor-pointer"
        >
          Beranda
        </Link>
        <Link
          to="berita"
          smooth={true}
          duration={500}
          className="py-4 px-3 hover:text-red-600 font-medium transition-all duration-300 cursor-pointer"
        >
          Berita
        </Link>
        <Link
          to="galeri"
          smooth={true}
          duration={500}
          className="py-4 px-3 hover:text-red-600 font-medium transition-all duration-300 cursor-pointer"
        >
          Galeri
        </Link>
        <Link
          to="sosmed"
          smooth={true}
          duration={500}
          className="py-4 px-3 hover:text-red-600 font-medium transition-all duration-300 cursor-pointer"
        >
          Sosial Media
        </Link>
      </div>

      <div className="md:hidden flex items-center ml-auto">
        <button
          onClick={toggleMobileMenu}
          className="mobile-menu-button p-2 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden mobile-menu flex ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } w-full absolute top-16 left-0 bg-white dark:bg-gray-800 shadow-lg animate__animated animate__fadeIn`}
      >
        <Link
          to="video-player"
          smooth={true}
          duration={500}
          className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-red-600 font-medium"
          onClick={toggleMobileMenu}
        >
          Beranda
        </Link>
        <Link
          to="berita"
          smooth={true}
          duration={500}
          className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-red-600 font-medium"
          onClick={toggleMobileMenu}
        >
          Berita
        </Link>
        <Link
          to="galeri"
          smooth={true}
          duration={500}
          className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-red-600 font-medium"
          onClick={toggleMobileMenu}
        >
          Galeri
        </Link>
        <Link
          to="sosmed"
          smooth={true}
          duration={500}
          className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-red-600 font-medium"
          onClick={toggleMobileMenu}
        >
          Sosial Media
        </Link>
      </div>
    </header>
  );
};

export default Header;
