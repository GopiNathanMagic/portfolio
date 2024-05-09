// import React from "react";
import { useState, useEffect } from "react";
import { Events, Link } from "react-scroll";
import logo from "/logo_portfolio.png";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100); // Adjust the scroll offset as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  Events.scrollEvent.register("end", (to, element) => {
    console.log("end", to, element);
    // setIsMenuOpen(!isMenuOpen);
  });

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        id="back-top"
        className={`header-outer ${isSticky ? "sticky" : ""}`}
      >
        <div className="container">
          <div className="header-inner">
            <div className="header-logo-outer">
              <div className="header-logo">
                <a href="index.html">
                  <img src={logo} alt="logo" title="logo" />
                </a>
              </div>
              <div className="header-mail">
                <a href="mailto:gopinathan9140@gmail.com">
                  gopinathan9140@gmail.com
                </a>
              </div>
            </div>
            <div className={`header-menu ${isMenuOpen ? "open" : ""}`}>
              {/* Navigation menu */}
              <nav>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <Link
                      to="skills"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      offset={-100}
                    >
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="Projects"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      offset={-100}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="Contact"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      offset={-100}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-btn">
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-100}
              >
                Hire Me!
              </Link>
            </div>

            {/* Hamburger menu button */}
            <div className="header-button">
              <button
                className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            {/* Hamburger menu button */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
