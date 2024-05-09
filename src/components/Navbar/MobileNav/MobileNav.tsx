import React from "react";
import "./MobileNav.css";

type MobileNavProps = {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileNav = ({ isOpen, toggleMenu }: MobileNavProps) => {

  const handleScroll = (sectionId: string) => {
    if (isOpen) toggleMenu();
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img src="./assets/images/logo.svg" alt="logo" className="logo" />

          <ul>
          <li>
              <a onClick={() => handleScroll("hero")} className="menu-item">
                Home
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("skills")} className="menu-item">
                Skills
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("work-exp")} className="menu-item">
                Work Experience
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("contact")} className="menu-item">
                Contact Me
              </a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>    
    </>
  );
};

export default MobileNav