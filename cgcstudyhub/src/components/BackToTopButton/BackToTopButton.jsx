import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 200);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    isVisible && (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
        {/* Tooltip */}
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="mb-2 px-3 py-1 text-sm text-white bg-gray-800 rounded-md shadow-lg"
          >
            Back to Top
          </motion.div>
        )}

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0], // Bounce animation
          }}
          transition={{
            duration: 0.8,
        
          }}
          onClick={scrollToTop}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
          aria-label="Back to top"
        >
          <FiArrowUp size={22} />
        </motion.button>
      </div>
    )
  );
}
