"use client"; // Ensure this is a client component

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";

function Navbar() {
  const omkarRef = useRef(null);
  const dhanaveRef = useRef(null);

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Initialize dark mode from localStorage or default to false (light mode)
    const savedMode = localStorage.getItem("theme") || "light";
    setDarkMode(savedMode === "dark");
    document.documentElement.classList.toggle("dark", savedMode === "dark");

    // Anime.js swipe out and rewrite animation for Omkar
    anime({
      targets: omkarRef.current,
      color: ["#9013fe", "#ff5aa2"],
      opacity: [0, 1, 1, 1, 1], // Fade out and back in
      translateX: [0, 50], // Swipe left and reset
      easing: "easeInOutSine",
      duration: 5000, // Total animation time in milliseconds
      loop: true, // Infinite loop
    });

    // Anime.js swipe out and rewrite animation for Dhanave
    anime({
      targets: dhanaveRef.current,
      color: ["#ff5aa2", "#9013fe"],
      opacity: [0, 1, 1, 1, 1], // Fade out and back in
      translateX: [0, 50], // Swipe right and reset
      easing: "easeInOutSine",
      duration: 5000, // Total animation time in milliseconds
      loop: true, // Infinite loop
    });
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", newMode === "dark");
    localStorage.setItem("theme", newMode); // Save the preference
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-3xl font-bold flex items-center gap-2">
            <span ref={omkarRef} className="text-[#ff5aa2]">
              Omkar
            </span>
            <span ref={dhanaveRef} className="text-[#9013fe]">
              Dhanave
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <ul
            className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
            id="navbar-default"
          >
            <li>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline text-black dark:text-white transition-colors duration-300"
                href="/#about"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline text-black dark:text-white transition-colors duration-300"
                href="/#skills"
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline text-black dark:text-white transition-colors duration-300"
                href="/#education"
              >
                EDUCATION
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline text-black dark:text-white transition-colors duration-300"
                href="/blog"
              >
                BLOGS
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline text-black dark:text-white transition-colors duration-300"
                href="/#projects"
              >
                PROJECTS
              </Link>
            </li>
          </ul>

          {/* Dark mode toggle button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-black transition-all"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
