import { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { Home, BookOpen, Award, Briefcase, Phone, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/image/mainlogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved preference or system preference
    return localStorage.getItem("darkMode") === "true" || 
           (!localStorage.getItem("darkMode") && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "#Home", icon: <Home size={20} /> },
    {
      name: "Courses",
      href: "#Courses",
      icon: <BookOpen size={20} />,
      submenu: [
        {
          name: "BTech",
          submenu: [
            { name: "CSE", link: "/btech/cse" },
            { name: "AIML", link: "/btech/aiml" },
            { name: "AIDS", link: "/btech/aids" },
            { name: "ECE", link: "/btech/ece" },
            { name: "IT", link: "/btech/it" },
          ],
        },
        { name: "MBA", href: "#MBA" },
        { name: "Pharmacy", href: "#Pharmacy" },
        { name: "BBA", href: "#BBA" },
      ],
    },
    { name: "Projects", href: "#Projects", icon: <Briefcase size={20} /> },
    { name: "Certificates", href: "#Certificates", icon: <Award size={20} /> },
    { name: "Contacts", href: "#Contacts", icon: <Phone size={20} /> },
  ];

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.15 } },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.2,
        staggerChildren: 0.05,
        when: "beforeChildren"
      } 
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 }
  };

  // Handle scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Navigation handler
  const handleNavigation = (e, target) => {
    e.preventDefault();

    // Close mobile menu on navigation
    setIsOpen(false);
    setMobileOpenMenu(null);
    setMobileOpenSubmenu(null);

    // Handle React Router navigation
    if (target.startsWith("/")) {
      navigate(target);
      return;
    }

    // Handle hash navigation
    if (location.pathname !== "/") {
      navigate(`/${target}`);
      return;
    }

    // Smooth scroll for hash links
    const element = document.querySelector(target);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed bg-blue-200 w-full top-0 z-50 transition-all py-1 duration-300 ${scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-white dark:bg-gray-900"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              onClick={(e) => handleNavigation(e, "#Home")} 
              className="flex items-center gap-2 cursor-pointer"
            >
              <img 
                src={Logo} 
                alt="Logo" 
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
              />
              <span className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                CGCStudyHub
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setOpenMenu(idx)}
                  onMouseLeave={() => {
                    setOpenMenu(null);
                    setOpenSubmenu(null);
                  }}
                >
                  <div className="flex items-center space-x-1">
                    <a
                      onClick={(e) => handleNavigation(e, item.link || item.href)}
                      className="px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {item.icon}
                      {item.name}
                    </a>
                    {item.submenu && (
                      <ChevronDown 
                        className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform ${openMenu === idx ? "rotate-180" : ""}`} 
                      />
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <AnimatePresence>
                      {openMenu === idx && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={dropdownVariants}
                          className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                        >
                          <div className="py-1">
                            {item.submenu.map((sub, subIdx) => (
                              <motion.div 
                                key={subIdx}
                                variants={itemVariants}
                                className="relative"
                                onMouseEnter={() => setOpenSubmenu(subIdx)}
                                onMouseLeave={() => setOpenSubmenu(null)}
                              >
                                <div className="flex justify-between items-center">
                                  {sub.link || sub.href ? (
                                    <a
                                      onClick={(e) => handleNavigation(e, sub.link || sub.href)}
                                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left cursor-pointer"
                                    >
                                      {sub.name}
                                    </a>
                                  ) : (
                                    <span className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 w-full">
                                      {sub.name}
                                    </span>
                                  )}
                                  {sub.submenu && (
                                    <ChevronDown 
                                      className={`w-4 h-4 mr-3 text-gray-500 dark:text-gray-400 transition-transform ${openSubmenu === subIdx ? "rotate-180" : ""}`} 
                                    />
                                  )}
                                </div>

                                {/* Second-level submenu */}
                                {sub.submenu && (
                                  <AnimatePresence>
                                    {openSubmenu === subIdx && (
                                      <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={dropdownVariants}
                                        className="absolute left-full top-0 ml-1 w-56 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                                      >
                                        {sub.submenu.map((nested, nIdx) => (
                                          <motion.div 
                                            key={nIdx}
                                            variants={itemVariants}
                                          >
                                            <a
                                              onClick={(e) => handleNavigation(e, nested.link || nested.href)}
                                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                            >
                                              {nested.name}
                                            </a>
                                          </motion.div>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                )}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FiSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-gray-800 shadow-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div 
                    className="flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    onClick={(e) => {
                      if (!item.submenu) {
                        handleNavigation(e, item.link || item.href);
                      } else {
                        setMobileOpenMenu(mobileOpenMenu === idx ? null : idx);
                      }
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      {item.name}
                    </div>
                    {item.submenu && (
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform ${mobileOpenMenu === idx ? "rotate-180" : ""}`}
                      />
                    )}
                  </div>

                  {/* Mobile submenu */}
                  {item.submenu && mobileOpenMenu === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.15 }}
                      className="pl-6"
                    >
                      {item.submenu.map((sub, subIdx) => (
                        <div key={subIdx} className="flex flex-col">
                          <div 
                            className="flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            onClick={(e) => {
                              if (!sub.submenu) {
                                handleNavigation(e, sub.link || sub.href);
                              } else {
                                setMobileOpenSubmenu(mobileOpenSubmenu === subIdx ? null : subIdx);
                              }
                            }}
                          >
                            {sub.name}
                            {sub.submenu && (
                              <ChevronDown 
                                className={`w-5 h-5 transition-transform ${mobileOpenSubmenu === subIdx ? "rotate-180" : ""}`}
                              />
                            )}
                          </div>

                          {/* Mobile second-level submenu */}
                          {sub.submenu && mobileOpenSubmenu === subIdx && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.15 }}
                              className="pl-6"
                            >
                              {sub.submenu.map((nested, nIdx) => (
                                <div
                                  key={nIdx}
                                  className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                  onClick={(e) => handleNavigation(e, nested.link || nested.href)}
                                >
                                  {nested.name}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}