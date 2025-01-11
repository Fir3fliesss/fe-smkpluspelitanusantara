import React from 'react';

const Header: React.FC = () => {
    return (
        <header className='border-b-2 px-1 py-1 flex space-x-10 sticky top-0 bg-white shadow-lg backdrop-blur-[1.75px] z-[999] dark:bg-gray-800 dark:text-slate-200'>
                <a href="#home">
                    <img src="/assets/logos/logo-with-text-dark-mode.webp" alt="logowithtext" className="w-96 h-20 "/>
                </a>
                <div className="hidden md:flex justify-end items-center space-x-1">
                    <a href="#home" className="py-4 px-3 hover:text-red-600 font-medium transition-all duration-300">
                        Beranda
                    </a>
                    <a  href="#berita" className="py-4 px-3 hover:text-red-600 font-medium transition-all duration-300">
                        Berita
                    </a>
                    <a  href="#galeri" className="py-4 px-3 hover:text-red-600 font-medium transition-all duration-300">
                        Galeri
                    </a>
                    <a  href="#sosmed" className="py-4 px-3 hover:text-red-600 font-medium transition-all duration-300">
                        Sosial Media
                    </a>
                </div>
        </header>
    );
};

export default Header;
