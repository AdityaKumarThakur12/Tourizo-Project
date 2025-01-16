import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import "../styles/navbar.css";
import logo from "../images/tourLogo.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // For handling scroll styles
  const { isLoggedin, handleLogout } = useContext(AuthContext); // Access isLoggedin state
  const navigate = useNavigate();

  const playSound = (audioFile) => {
    const audio = new Audio(audioFile);
    audio.play();
  };

  const onLogout = async () => {
    try {
      await handleLogout();
      navigate("/"); // Redirect to home page after logout
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    playSound("sounds/click.mp3");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Add scroll event listener to handle navbar styles
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-wrapper ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        {/* Logo Section */}
        <Link
          to="/"
          className="logo-link"
          onClick={() => {
            playSound("sounds/click.mp3");
            closeMenu();
          }}
        >
          <img src={logo} alt="Logo" className="navlogo" />
        </Link>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link
            to="/"
            onClick={() => {
              playSound("sounds/click.mp3");
              closeMenu();
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => {
              playSound("sounds/click.mp3");
              closeMenu();
            }}
          >
            About
          </Link>
          <Link
            to="/places"
            onClick={() => {
              playSound("sounds/click.mp3");
              closeMenu();
            }}
          >
            Places
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              playSound("sounds/click.mp3");
              closeMenu();
            }}
          >
            Contact
          </Link>

          {isLoggedin ? (
            // Show Logout button if logged in
            <Button
              colorScheme="white"
              className="log-out-button"
              onClick={() => {
                playSound("sounds/click.mp3");
                onLogout();
                closeMenu();
              }}
            >
              Log Out
            </Button>
          ) : (
            // Show Login button if not logged in
            <Button
              colorScheme="white"
              className="log-out-button"
              onClick={() => {
                playSound("sounds/click.mp3");
                navigate("/login");
                closeMenu();
              }}
            >
              Log In
            </Button>
          )}
        </div>

        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
