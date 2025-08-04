import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
        <footer
        id = "footer"
        className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-7 px-6 md:px-12 lg:px-24">
      
          <p className="text-m text-center text-black dark:text-white">&copy; {new Date().getFullYear()} CGCStudyHub. Made with ❤️ by Senior </p>
       
    </footer>
  );
}
