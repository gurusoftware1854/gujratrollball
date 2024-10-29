import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu visibility
  const [isButtonActive, setIsButtonActive] = useState(false); // State for button active class

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the value as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
    setIsButtonActive(!isButtonActive); // Toggle button active state
  };

  return (
    <header className={`position_top ${isSticky ? 'sticky' : ''}`}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6 col-md-6 col-lg-2">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/assets/img/logo.webp"
                  alt="Logo"
                  width={70}
                  height={70}
                />
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-10 text-end">
            <nav className={`main-nav ${isMenuOpen ? 'slidenav' : ''}`}> {/* Apply class based on menu state */}
              <div className="mobile-menu-logo">
                <Link href="/">
                  <Image
                    src="/assets/img/logo.webp"
                    alt="Logo"
                    width={70}
                    height={70}
                  />
                </Link>
              </div>
              <ul className={`nav-list ${isSticky ? 'sticky-nav' : ''}`}>
                <li className="has-child active">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/About_Us">About Us</Link>
                </li>
                <li>
                  <Link href="/Documents">Documents</Link>
                </li>
                <li>
                  <Link href="/Gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="/Blog">Blog</Link>
                </li>
                <li>
                  <Link href="/Contact_Us">Contact Us</Link>
                </li>
              </ul>
            </nav>
            <div className="mobile-menu">
              <a 
                href="javascript:void(0)" 
                className={`cross-btn ${isButtonActive ? 'h-active' : ''}`} // Apply class based on button state
                onClick={handleMenuToggle}
              >
                <span className="cross-top"></span>
                <span className="cross-middle"></span>
                <span className="cross-bottom"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
