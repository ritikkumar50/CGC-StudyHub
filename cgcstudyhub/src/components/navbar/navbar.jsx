import { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { Home, BookOpen, Award, Briefcase, Phone, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/image/mainlogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "#Home", icon: <Home size={20} className="text-gray-700 dark:text-white" /> },
    {
      name: "Courses",
      href: "#Courses",
      icon: <BookOpen size={20} className="text-gray-700 dark:text-white" />,
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
    { name: "Projects", href: "#Projects", icon: <Briefcase size={20} className="text-gray-700 dark:text-white" /> },
    { name: "Certificates", href: "#Certificates", icon: <Award size={20} className="text-gray-700 dark:text-white" /> },
    { name: "Contacts", href: "#Contacts", icon: <Phone size={20} className="text-gray-700 dark:text-white" /> },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  // Smooth scroll or navigate
  const handleNavigation = (e, target) => {
    e.preventDefault();

    // If the item has a direct React Router link (like /btech/cse)
    if (target.startsWith("/")) {
      navigate(target);
      setIsOpen(false);
      return;
    }

    // If not on the home page, navigate to home + hash
    if (location.pathname !== "/") {
      navigate(`/${target}`);
      return;
    }

    // Smooth scroll within home page
    const element = document.querySelector(target);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <nav className="bg-blue-200 dark:bg-gray-900 shadow-md fixed w-full top-0 z-50 transition-colors duration-500">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a onClick={(e) => handleNavigation(e, "#Home")} className="flex items-center gap-2 cursor-pointer">
          <img src={Logo} alt="Logo" className="w-20 h-20 object-contain" />
          <span className="text-2xl font-bold text-gray-800 dark:text-white">CGCStudyHub</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="relative group cursor-pointer flex items-center space-x-2"
              onMouseEnter={() => setOpenMenu(idx)}
              onMouseLeave={() => {
                setOpenMenu(null);
                setOpenSubmenu(null);
              }}
            >
              {item.icon}
              <div className="flex items-center gap-1">
                <a
                  onClick={(e) => handleNavigation(e, item.link || item.href)}
                  className="text-gray-700 dark:text-white group-hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
                {item.submenu && <ChevronUp className={`w-6 h-6 dark:text-white ${openMenu === idx ? "rotate-180" : ""}`} />}
              </div>

              {/* Dropdown */}
              {item.submenu && openMenu === idx && (
                <AnimatePresence>
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className="absolute left-0 top-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md w-40 dark:text-white"
                  >
                    {item.submenu.map((sub, subIdx) => (
                      <li
                        key={subIdx}
                        className="relative px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onMouseEnter={() => setOpenSubmenu(subIdx)}
                        onMouseLeave={() => setOpenSubmenu(null)}
                      >
                        {sub.link || sub.href ? (
                          <a
                            onClick={(e) => handleNavigation(e, sub.link || sub.href)}
                            className="block cursor-pointer"
                          >
                            {sub.name}
                          </a>
                        ) : (
                          <span>{sub.name}</span>
                        )}

                        {/* Second-level submenu */}
                        {sub.submenu && openSubmenu === subIdx && (
                          <AnimatePresence>
                            <motion.ul
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              variants={dropdownVariants}
                              className="absolute left-full top-0 ml-1 bg-white dark:bg-gray-800 shadow-lg rounded-md w-40"
                            >
                              {sub.submenu.map((nested, nIdx) => (
                                <li key={nIdx} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                  <a onClick={(e) => handleNavigation(e, nested.link || nested.href)}>
                                    {nested.name}
                                  </a>
                                </li>
                              ))}
                            </motion.ul>
                          </AnimatePresence>
                        )}
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              )}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Dark mode + mobile menu button */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition hover:scale-110"
          >
            {darkMode ? <FiSun className="w-5 h-5 text-yellow-400" /> : <FiMoon className="w-5 h-5 text-gray-800" />}
          </button>
           
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-gray-700 dark:text-white focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <ul className="flex flex-col gap-2 py-4 text-gray-700 dark:text-white font-medium">
            {menuItems.map((item, idx) => (
              <li key={idx} className="flex flex-col">
                <div className="flex gap-3 items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  <a onClick={(e) => handleNavigation(e, item.link || item.href)} className="flex items-center gap-2">
                    {item.icon} {item.name}
                  </a>
                  {item.submenu && (
                    <ChevronUp
                      onClick={() => setMobileOpenMenu(mobileOpenMenu === idx ? null : idx)}
                      className={`w-5 h-6 cursor-pointer transition-transform ${mobileOpenMenu === idx ? "rotate-180" : ""}`}
                    />
                  )}
                </div>

                {/* Mobile Submenus */}
                {item.submenu && mobileOpenMenu === idx && (
                  <ul className="pl-6">
                    {item.submenu.map((sub, subIdx) => (
                      <li key={subIdx} className="flex flex-col">
                        <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                          <span onClick={(e) => handleNavigation(e, sub.link || sub.href)}>{sub.name}</span>
                          {sub.submenu && (
                            <ChevronUp
                              onClick={(e) => {
                                e.stopPropagation();
                                setMobileOpenSubmenu(mobileOpenSubmenu === subIdx ? null : subIdx);
                              }}
                              className={`w-5 h-5 ml-1 transition-transform ${mobileOpenSubmenu === subIdx ? "rotate-180" : ""}`}
                            />
                          )}
                        </div>
                        {sub.submenu && mobileOpenSubmenu === subIdx && (
                          <ul className="pl-6">
                            {sub.submenu.map((nested, nIdx) => (
                              <li key={nIdx} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <a onClick={(e) => handleNavigation(e, nested.link || nested.href)}>{nested.name}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
