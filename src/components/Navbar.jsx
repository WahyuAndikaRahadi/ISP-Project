import React, { useState, useEffect } from 'react';

// Animated hamburger icon
const AnimatedHamburgerIcon = ({ isOpen }) => (
  <div className="w-6 h-6 flex flex-col justify-between items-center cursor-pointer">
    <span className={`block w-full h-0.5 bg-white transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
    <span className={`block w-full h-0.5 bg-white transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
    <span className={`block w-full h-0.5 bg-white transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
  </div>
);

// Language dictionary
const translations = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    language: 'Language',
    english: 'English',
    indonesian: 'Indonesian',
  },
  id: {
    home: 'Beranda',
    about: 'Tentang',
    services: 'Layanan',
    contact: 'Kontak',
    darkMode: 'Mode Gelap',
    lightMode: 'Mode Terang',
    language: 'Bahasa',
    english: 'Inggris',
    indonesian: 'Indonesia',
  },
};

// Main Navbar Component
const Navbar = ({ onMenuToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  // State for language dropdown visibility
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  // State for language, defaults to 'en' or saved preference
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || 'en';
  });

  // Load theme and language from localStorage on mount
  useEffect(() => {
    // Theme logic
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }

    // Scroll handling
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    // Initial animation for desktop links
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Control body overflow when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  // Translate text based on current language
  const t = (key) => translations[language][key] || key;

  // Toggle Dark/Light Mode
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

  // Toggle Language and Reload the page
  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    window.location.reload(); // This reloads the page to apply translations
  };

  // Handle mobile menu toggle
  const handleMenuToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onMenuToggle) onMenuToggle(newState);
  };

  const navClass = `fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg bg-gray-800/90 dark:bg-gray-900/90 backdrop-blur-sm' : 'bg-gray-800 dark:bg-gray-900'}`;

  // Staggered animation for mobile menu items
  const mobileMenuItemClass = (delay) => (
    `px-8 transition-all transform duration-300 ease-in-out ${isOpen ? `opacity-100 translate-x-0 ${delay}` : 'opacity-0 -translate-x-full'}`
  );

  // Desktop menu animation (underline effect)
  const desktopMenuClass = `
    pb-1
    bg-gradient-to-r from-sky-400 to-cyan-300
    bg-no-repeat
    bg-bottom
    bg-[length:0px_2px]
    hover:bg-[length:100%_2px]
    transition-[background-size] duration-300
  `;

  // Desktop link entry animation (runs once on load)
  const desktopLinkClass = (delay) => `
    px-4
    transition-all duration-500
    ${hasAnimated ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
    ${delay}
  `;

  return (
    <>
      <style>{`
        @keyframes toggle-anim {
          from {
            transform: scale(0.8) rotate(0deg);
            opacity: 0.5;
          }
          to {
            transform: scale(1) rotate(360deg);
            opacity: 1;
          }
        }
        .animate-toggle {
          animation: toggle-anim 0.5s ease-in-out;
        }
      `}</style>
      {/* Overlay background with fade-in animation */}
      <div className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-500 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={handleMenuToggle} />

      <nav className={navClass}>
        <div className="container mx-auto flex items-center justify-between p-4 text-white dark:text-gray-200">
          
          {/* Logo - Leftmost */}
          <div className="flex-shrink-0">
            {/* Using a placeholder image URL for demonstration */}
            <img 
              src="https://placehold.co/100x32/1a202c/ffffff?text=LOGO" 
              alt="My Website Logo" 
              className={`h-8 transition-transform duration-300 rounded-lg ${isScrolled ? 'scale-90' : 'scale-100'}`} 
            />
          </div>

          {/* Hamburger Icon for Mobile - Right side */}
          <div className="md:hidden z-50">
            <button onClick={handleMenuToggle} className="focus:outline-none">
              <AnimatedHamburgerIcon isOpen={isOpen} />
            </button>
          </div>
          
          {/* Desktop Menu - Centered */}
          <ul className="hidden md:flex flex-1 justify-center items-center">
            <li className={desktopLinkClass('delay-0')}><a href="#" className={desktopMenuClass}>{t('home')}</a></li>
            <li className={desktopLinkClass('delay-75')}><a href="#" className={desktopMenuClass}>{t('about')}</a></li>
            <li className={desktopLinkClass('delay-150')}><a href="#" className={desktopMenuClass}>{t('services')}</a></li>
            <li className={desktopLinkClass('delay-200')}><a href="#" className={desktopMenuClass}>{t('contact')}</a></li>
          </ul>

          {/* Dark Mode and Language Toggle - Rightmost */}
          <div className="hidden md:flex items-center flex-shrink-0 space-x-4">
            {/* Language Selector for Desktop */}
            <div 
              className="relative"
              onMouseEnter={() => setShowLanguageDropdown(true)}
              onMouseLeave={() => setShowLanguageDropdown(false)}
            >
              <button 
                className="flex items-center space-x-1 focus:outline-none p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105 active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M3 9h8m-8 4h12m-8 4h12M3 20h8" />
                </svg>
                <span>{language === 'en' ? 'EN' : 'ID'}</span>
              </button>
              <div className={`absolute right-0 mt-2 w-32 bg-gray-700 dark:bg-gray-800 rounded-md shadow-lg py-1 transition-all duration-200 ease-out ${showLanguageDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <button 
                  onClick={() => toggleLanguage('en')} 
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-600 dark:hover:bg-gray-700 rounded"
                >
                  {t('english')}
                </button>
                <button 
                  onClick={() => toggleLanguage('id')} 
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-600 dark:hover:bg-gray-700 rounded"
                >
                  {t('indonesian')}
                </button>
              </div>
            </div>

            {/* Dark Mode Toggle for Desktop with SVG and animation */}
            <button 
              onClick={toggleDarkMode} 
              className="focus:outline-none p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105 active:scale-95"
            >
              <div key={isDarkMode ? 'dark' : 'light'} className="animate-toggle">
                {isDarkMode ? (
                  <svg className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile menu - slides from left */}
        <div className={`md:hidden fixed top-0 left-0 w-64 h-full bg-gray-700 dark:bg-gray-800 shadow-lg transform transition-transform ease-in-out duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className="flex flex-col space-y-2 py-4 mt-20 text-white">
            <li className={mobileMenuItemClass('delay-100')}><a href="#" onClick={handleMenuToggle} className="block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-700 rounded transition-colors duration-300">{t('home')}</a></li>
            <li className={mobileMenuItemClass('delay-200')}><a href="#" onClick={handleMenuToggle} className="block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-700 rounded transition-colors duration-300">{t('about')}</a></li>
            <li className={mobileMenuItemClass('delay-300')}><a href="#" onClick={handleMenuToggle} className="block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-700 rounded transition-colors duration-300">{t('services')}</a></li>
            <li className={mobileMenuItemClass('delay-400')}><a href="#" onClick={handleMenuToggle} className="block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-700 rounded transition-colors duration-300">{t('contact')}</a></li>
            
            {/* Language Selector for Mobile */}
            <li className={mobileMenuItemClass('delay-500')}>
              <div className="flex flex-col px-4 py-2">
                <span className="text-sm text-gray-400 mb-2">{t('language')}:</span>
                <button 
                  onClick={() => { toggleLanguage('en'); }} 
                  className={`w-full text-left px-4 py-2 rounded transition-colors duration-300 ${language === 'en' ? 'bg-sky-500 text-white' : 'hover:bg-gray-600 dark:hover:bg-gray-700'}`}
                >
                  {t('english')}
                </button>
                <button 
                  onClick={() => { toggleLanguage('id'); }} 
                  className={`w-full text-left px-4 py-2 rounded transition-colors duration-300 mt-1 ${language === 'id' ? 'bg-sky-500 text-white' : 'hover:bg-gray-600 dark:hover:bg-gray-700'}`}
                >
                  {t('indonesian')}
                </button>
              </div>
            </li>

            {/* Dark Mode Toggle for Mobile with SVG and animation */}
            <li className={mobileMenuItemClass('delay-600')}>
              <button onClick={toggleDarkMode} className="w-full flex items-center justify-start px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-700 rounded transition-colors duration-300 space-x-2">
                <div key={isDarkMode ? 'dark-mobile' : 'light-mobile'} className="animate-toggle">
                  {isDarkMode ? (
                    <svg className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </div>
                <span>{isDarkMode ? t('darkMode') : t('lightMode')}</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
