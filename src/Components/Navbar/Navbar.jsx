import React, { useState } from "react";
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

  const links = (
    <>
      <li className="mr-3">
        <AnchorLink href="#home" className="flex items-center gap-2 ">
          <FaHome size={20} />
          <span>Home</span>
        </AnchorLink>
      </li>
      <li className="mr-3">
        <AnchorLink href="#about" className="flex items-center gap-2">
          <IoPerson size={20} /> About
        </AnchorLink>
      </li>
      <li className="mr-3">
        <AnchorLink href="#skills">
          <FaPen size={20} />
          Skills
        </AnchorLink>
      </li>
      <li className="mr-3">
        <AnchorLink href="#education">
          <FaUserGraduate size={20} />
          Education
        </AnchorLink>
      </li>
      <li className="mr-3">
        <AnchorLink href="#projects">
          <FaProjectDiagram size={20} />
          Projects
        </AnchorLink>
      </li>
      <li>
        <AnchorLink href="#contacts">
          <MdMail size={20} />
          Contacts
        </AnchorLink>
      </li>
    </>
  );

  return (
    <>
      {/* Navbar */}
      <div className="navbar  backdrop-blur-sm  shadow-sm  top-0 z-30 w-full sticky">
        <div className="navbar-start">
          <a href="home" className="btn  text-xl ">
            <img className="w-50" src={logo} alt="" />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

      <div className="navbar-end">
  <AnchorLink href="#contacts">
    <button
      className="btn hidden hover:text-black border-[#47d267] lg:block hover:bg-[#47d267] rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-110 text-[#47d267]"
    >
      Connect With Me
    </button>
  </AnchorLink>


          {/* Hamburger Button (Mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="btn btn-ghost lg:hidden ml-2"
          >
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
          </button>
        </div>
      </div>

      {/* Slide-out Sidebar (Right Side) */}
      <div
        className={`fixed top-0 right-0 mb-6 h-full w-64 bg-base-100 shadow-lg transform transition-transform duration-400 z-45 - border-2 rounded-2xl ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="btn btn-sm btn-circle btn-ghost"
          >
            ✕
          </button>
        </div>
        <ul className="menu p-4 ">{links}</ul>
      </div>

      {/* Background Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-transprant bg-opacity-20 z-50"
        ></div>
      )}
    </>
  );
};

export default Navbar;
