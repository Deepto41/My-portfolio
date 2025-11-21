import React, { useState, useRef, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import {
  FaHome,
  FaPen,
  FaProjectDiagram,
  FaUserGraduate,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null);

  // Get the navbar height dynamically
  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  const links = (isMobile = false) => (
    <>
      <li>
        <AnchorLink
          href="#home"
          offset="80"
          onClick={() => isMobile && setOpen(false)}
          className="flex items-center gap-2"
        >
          <FaHome size={20} /> Home
        </AnchorLink>
      </li>
      <li>
        <AnchorLink
          href="#about"
          offset="80"
          onClick={() => isMobile && setOpen(false)}
          className="flex items-center gap-2"
        >
          <IoPerson size={20} /> About
        </AnchorLink>
      </li>
      <li>
        <AnchorLink
          href="#skills"
          offset="80"
          onClick={() => isMobile && setOpen(false)}
          className="flex items-center gap-2"
        >
          <FaPen size={20} /> Skills
        </AnchorLink>
      </li>
      <li>
        <AnchorLink
          href="#education"
          offset="80"
          onClick={() => isMobile && setOpen(false)}
          className="flex items-center gap-2"
        >
          <FaUserGraduate size={20} /> Education
        </AnchorLink>
      </li>
      <li>
        <AnchorLink
          href="#projects"
          offset="80"
          onClick={() => isMobile && setOpen(false)}
          className="flex items-center gap-2"
        >
          <FaProjectDiagram size={20} /> Projects
        </AnchorLink>
      </li>
      <li>
        <AnchorLink
          href="#contacts"
          offset="80"
          onClick={() => isMobile && setOpen(false)}
          className="flex items-center gap-2"
        >
          <MdMail size={20} /> Contacts
        </AnchorLink>
      </li>
    </>
  );

  return (
    <>
      {/* NAVBAR */}
      <div
        ref={navbarRef}
        className="navbar px-4 backdrop-blur-sm shadow-sm top-0 z-30 w-full  mx-auto sticky bg-base-700"
      >
        <div className="navbar-start">
          <a href="#home" className="btn text-xl p-0">
            <img className="w-36" src={logo} alt="Logo" />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links()}</ul>
        </div>

        <div className="navbar-end">
          <a
            href="https://drive.google.com/file/d/1QLPbpdigMPf33l8_HBScMEsWrUBMmnYQ/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn hidden lg:block border-[#47d267] text-[#47d267] text-lg mr-3 px-5 rounded-2xl hover:bg-[#47d267] hover:text-black transition-transform duration-500 transform hover:scale-110">
              Resume
            </button>
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="btn btn-ghost lg:hidden ml-2 text-2xl"
          >
            {open ? "✕" : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      {open && (
        <>
          <div
            className="fixed right-0 w-64 bg-base-100 shadow-lg border rounded-l-2xl z-20 overflow-hidden"
            style={{ top: `${navbarHeight}px` }}
          >
            <ul className="menu p-4 space-y-2">{links(true)}</ul>
          </div>

          {/* OVERLAY */}
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-opacity-20 z-10"
          ></div>
        </>
      )}
    </>
  );
};

export default Navbar;
