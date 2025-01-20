import React from 'react';
import { useTheme } from '../contexts/ThemeContexts';
import logoDarkMode from '/assets/logos/logo-with-text-dark-mode.webp';
import logoLightMode from '/assets/logos/logo-with-text-light-mode.webp';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

const Header: React.FC = () => {

    const { isDarkMode } = useTheme();

    return (
        <header className='px-1 py-1 flex space-x-10 sticky top-0 bg-white shadow-lg backdrop-blur-[1.75px] z-[999] dark:bg-gray-800 dark:text-slate-200 scroll-smooth'>
                <a href='/'>
                    <img
                        src={isDarkMode ? logoDarkMode : logoLightMode} alt="logo"
                        className="w-96 h-20 transition ease-in-out  transition-transform-[0.3s] cursor-pointer" />
                </a>
                <div className="hidden md:flex justify-end items-center space-x-1">
                    <Link to="video-player" smooth={true} duration={500} className="py-4 px-3 hover:text-red-600 font-medium transition-all duration-300 cursor-pointer">
                        Beranda
                    </Link>
                    <Link to="berita" smooth={true} duration={500} className="py-4 px-3 hover:text-red-600 font-medium transition-all duration-300 cursor-pointer">
                        Berita
                    </Link>
                    <Link to="galeri" smooth={true} duration={500} className="py-4 px-3 hover:text-red-600 font-medium transition-all duration-300 cursor-pointer">
                        Galeri
                    </Link>
                    <Link
                    to="sosmed" smooth={true} duration={500} className="py-4 px-3 hover:text-red-600 font-medium transition-all duration-300 cursor-pointer">
                        Sosial Media
                    </Link>
                </div>
        </header>
    );
};

export default Header;
