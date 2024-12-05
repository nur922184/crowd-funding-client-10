import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navber';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router-dom';
import { BsSun, BsMoon } from "react-icons/bs";

const MainLayout = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light" // Default to light theme
  );

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme class to the root element
  useEffect(() => {
    const rootElement = document.documentElement;
    if (theme === "dark") {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 min-h-screen">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <div className="flex justify-between items-center p-4">
          <Navbar />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-colors duration-300"
          >
            {theme === "light" ? <BsMoon size={24} /> : <BsSun size={24} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
