import React, { useState, useEffect } from 'react';

// Animated hamburger icon
const AnimatedHamburgerIcon = ({ isOpen }) => (
  <div className="w-6 h-6 flex flex-col justify-between items-center cursor-pointer">
    <span className={`block w-full h-0.5 bg-white transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
    <span className={`block w-full h-0.5 bg-white transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
    <span className={`block w-full h-0.5 bg-white transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
  </div>
);

const Navbar = ({ onMenuToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const toggleDarkMode = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    if (newIsDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleMenuToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onMenuToggle) onMenuToggle(newState);
  };

  const navClass = `fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg bg-gray-800/90 dark:bg-gray-900/90 backdrop-blur-sm' : 'bg-gray-800 dark:bg-gray-900'}`;

  // Animasi staggered untuk mobile menu
  const mobileMenuItemClass = (delay) => (
    `px-8 transition-all transform duration-300 ease-in-out ${isOpen ? `opacity-100 translate-x-0 ${delay}` : 'opacity-0 -translate-x-full'}`
  );

  // Desktop menu animation
  const desktopMenuClass = `
    pb-1
    bg-gradient-to-r from-sky-400 to-cyan-300
    bg-no-repeat
    bg-bottom
    bg-[length:0px_2px]
    hover:bg-[length:100%_2px]
    transition-[background-size] duration-300
  `;

  // Animasi link desktop yang hanya berjalan sekali saat dimuat
  const desktopLinkClass = (delay) => `
    px-4
    transition-all duration-500
    ${hasAnimated ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
    ${delay}
  `;

  return (
    <>
      {/* Latar Belakang Overlay dengan animasi fade-in */}
      <div className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-500 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={handleMenuToggle} />

      <nav className={navClass}>
        <div className="container mx-auto flex items-center justify-between p-4 text-white dark:text-gray-200">
          
          {/* Logo - Paling Kiri */}
          <div className="flex-shrink-0">
            <img 
              src="/path/to/your/logo.png" 
              alt="Logo Namselink" 
              className={`h-8 transition-transform duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`} 
            />
          </div>

          <div className="md:hidden z-50">
            <button onClick={handleMenuToggle} className="focus:outline-none">
              <AnimatedHamburgerIcon isOpen={isOpen} />
            </button>
          </div>
          
          {/* Menu Desktop - Di Tengah */}
          <ul className="hidden md:flex flex-1 justify-center items-center">
            <li className={desktopLinkClass('delay-0')}><a href="#" className={desktopMenuClass}>Home</a></li>
            <li className={desktopLinkClass('delay-75')}><a href="#" className={desktopMenuClass}>About</a></li>
            <li className={desktopLinkClass('delay-150')}><a href="#" className={desktopMenuClass}>Services</a></li>
            <li className={desktopLinkClass('delay-200')}><a href="#" className={desktopMenuClass}>Contact</a></li>
          </ul>

          {/* Tombol Dark Mode - Paling Kanan */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <button 
              onClick={toggleDarkMode} 
              className="focus:outline-none p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105 active:scale-95"
            >
              <span key={isDarkMode ? 'dark' : 'light'} className="inline-block animate-spin-once">
                {isDarkMode ? '☀️' : '🌙'}
              </span>
            </button>
          </div>
        </div>
        
        {/* Mobile menu - slide dari kiri */}
        <div className={`md:hidden fixed top-0 left-0 w-64 h-full bg-gray-700 dark:bg-gray-800 shadow-lg transform transition-transform ease-in-out duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className="flex flex-col space-y-2 py-4 mt-20 text-white">
            <li className={mobileMenuItemClass('delay-100')}><a href="#" className="block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-700 rounded transition-colors duration-300">Home</a></li>
            <li className={mobileMenuItemClass('delay-200')}><a href="#" className="block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-700 rounded transition-colors duration-300">About</a></li>
            <li className={mobileMenuItemClass('delay-300')}><a href="#" className="block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-700 rounded transition-colors duration-300">Services</a></li>
            <li className={mobileMenuItemClass('delay-400')}><a href="#" className="block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-700 rounded transition-colors duration-300">Contact</a></li>
            <li className={mobileMenuItemClass('delay-500')}>
              <button onClick={toggleDarkMode} className="w-full flex items-center justify-start px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-700 rounded transition-colors duration-300">
                <span>{isDarkMode ? '☀️ Dark Mode' : '🌙 Light Mode'}</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;    