import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { NavStyle } from "./NavStyle";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

export default function ResponsiveNav() {
  const [showElement, setShowElement] = useState({
    navbarNav: true,
    hamburgerIcon: false,
    closeIcon: false,
    navOpened: false,
  });

//   const [pageTitle, setPageTitle] = useState("");
  const [pages, setPages] = useState(()=>(
  <Home pageTitle="Home" />
  ));

  const navigate = (e) => {

    document.querySelectorAll(".active").forEach((navLink) => navLink.classList.remove("active"));
    e.target.classList.add("active");

    let pageTitle = e.target.innerText;
    switch(pageTitle) {
      case "Home":
        setPages(<Home pageTitle={pageTitle} />);
        break;
      case "About":
        setPages(<About pageTitle={pageTitle} />);
        break;
      case "Contact":
        setPages(<Contact pageTitle={pageTitle} />);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let windowWidth = window.innerWidth;
    windowWidth > 600 &&
    setShowElement({ navbarNav: true, hamburgerIcon: false });
    windowWidth <= 600 &&
    setShowElement({ navbarNav: false, hamburgerIcon: true });
    
    window.onresize = () => {
      let windowWidth = window.innerWidth;
      windowWidth > 600 &&
        setShowElement({ navbarNav: true, hamburgerIcon: false });
      windowWidth <= 600 &&
        setShowElement({ navbarNav: false, hamburgerIcon: true });
    };
  }, []);

  const openNav = () => {
    setShowElement({
      navbarNav: true,
      hamburgerIcon: false,
      closeIcon: true,
      navOpened: true,
    });
  };

  const closeNav = () => {
    setShowElement({
      navbarNav: false,
      hamburgerIcon: true,
      closeIcon: false,
      navOpened: false,
    });
  };

  const handleActive = (e) => {
    document.querySelectorAll(".active").forEach((navLink) => navLink.classList.remove("active"));
    e.target.classList.add("active");
    // setPageTitle(e.target.innerText);
  };


  return (
    <>
    <NavStyle className={`navbar bg-primary text-light ${
        showElement.navOpened && "showNavbar"
        }`}>
      <div className="navbar-logo">
        <a href="#" className="navbar-brand">
          Mykola AK
        </a>
        {showElement.hamburgerIcon && <AiOutlineMenu onClick={openNav} />}
        {showElement.closeIcon && <AiOutlineClose onClick={closeNav}/>}
      </div>
      <div className="navbar-collapse">
        {showElement.navbarNav ? (
          <ul className={`navbar-items ${
            showElement.navOpened && "showNavbar"
            }`}>
            <NavItem text={"Home"} active="active" onClick={navigate} />
            <NavItem text={"About"} onClick={navigate} />
            <NavItem text={"Contact"} onClick={navigate} />
          </ul>
        ) : null}
      </div>
    </NavStyle>
    {/* <h1 className="title text-center text-primary">
        {!pageTitle ? "Home" : pageTitle}
    </h1> */}
    <div className="container px-2 outlet">
        {pages}
    </div>
    </>

  );
}
