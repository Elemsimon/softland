import React, { useEffect, useState } from 'react';

const Nav = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  useEffect(() => {
    const toggleScrolled = () => {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    };

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    return () => {
      document.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
    };
  }, []);

  const mobileNavToggle = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  useEffect(() => {
    const handleNavMenuClick = () => {
      if (isMobileNavActive) {
        setIsMobileNavActive(false);
      }
    };

    const navMenuLinks = document.querySelectorAll('#navmenu a');
    navMenuLinks.forEach(navmenu => {
      navmenu.addEventListener('click', handleNavMenuClick);
    });

    return () => {
      navMenuLinks.forEach(navmenu => {
        navmenu.removeEventListener('click', handleNavMenuClick);
      });
    };
  }, [isMobileNavActive]);

  useEffect(() => {
    const handleDropdownToggle = (e) => {
      e.preventDefault();
      e.currentTarget.parentNode.classList.toggle('active');
      e.currentTarget.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    };

    const dropdownToggles = document.querySelectorAll('.navmenu .toggle-dropdown');
    dropdownToggles.forEach(navmenu => {
      navmenu.addEventListener('click', handleDropdownToggle);
    });

    return () => {
      dropdownToggles.forEach(navmenu => {
        navmenu.removeEventListener('click', handleDropdownToggle);
      });
    };
  }, []);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          {/* <img src="assets/img/logo.png" alt="" /> */}
          <h1 className="sitename">SoftLand</h1>
        </a>

        <nav id="navmenu" className={`navmenu ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`} onClick={mobileNavToggle}></i>
        </nav>
      </div>
    </header>
  );
};

export default Nav;