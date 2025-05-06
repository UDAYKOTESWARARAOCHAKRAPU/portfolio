import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "../Css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();

  useEffect(() => {
    // Set active tab based on current URL path
    const path = location.pathname;
    if (path === "/") {
      setActiveTab("home");
    } else if (path === "/about") {
      setActiveTab("about");
    } else if (path === "/projects") {
      setActiveTab("projects");
    } else if (path === "/contact") {
      setActiveTab("contact");
    }
  }, [location]);

  useEffect(() => {
    // Set active tab based on current scroll position
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view (with some buffer)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
      <Link to="/" className="span">My Portofilo</Link>
      </div>

      <div className="navbar__cta">
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="navbar__links active"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/" className={activeTab === "home" ? "active" : ""}>Home</Link>
              <Link to="/about" className={activeTab === "about" ? "active" : ""}>About</Link>
              <Link to="/projects" className={activeTab === "projects" ? "active" : ""}>Projects</Link>
              <Link to="/contact" className={activeTab === "contact" ? "active" : ""}>Contact</Link>
              <a 
                href="/UdayKoteswararao_Chakrapu_Resume.pdf" 
                download="UdayKoteswararao_Chakrapu_Resume.pdf" 
                className="resume-link"
              >
                Resume
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
        {!menuOpen && (
          <nav className="navbar__links">
            <Link to="/" className={activeTab === "home" ? "active" : ""}>Home</Link>
            <Link to="/about" className={activeTab === "about" ? "active" : ""}>About</Link>
            <Link to="/projects" className={activeTab === "projects" ? "active" : ""}>Projects</Link>
            <Link to="/contact" className={activeTab === "contact" ? "active" : ""}>Contact</Link>
            <a 
              href="/UdayKoteswararao_Chakrapu_Resume.pdf" 
              download="UdayKoteswararao_Chakrapu_Resume.pdf" 
              className="resume-link"
            >
              Resume
            </a>
          </nav>
        )}
        <motion.div
          className="hamburger"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="bar"
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
          <motion.span
            className="bar"
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
          <motion.span
            className="bar"
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
        </motion.div>
      </div>
    </header>
  );
}

export default Navbar;