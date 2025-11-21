import React from "react";
import image from "../../assets/dp.jpeg";
import { MarkGithubIcon } from "@primer/octicons-react";
import { FaArrowAltCircleDown, FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";


const Home = () => {
  return (
    <div
      id="home"
      className="
        mt-8 mb-4 
        flex flex-col lg:flex-row         /* mobile column, desktop row */
        justify-between items-center 
        h-auto lg:h-screen w-11/12 mx-auto              /* mobile auto height */
        px-4
      "
    >
      {/* IMAGE (Mobile first, Desktop second — no desktop changes) */}
      <img
        className="
          w-48 h-48 
          sm:w-60 sm:h-60 
          lg:w-80 lg:h-100               /* original size for desktop */
          rounded-full border outline-2 p-1 
          outline-[#47d267] border-[#47d267] 
          mb-6 lg:mb-0
          order-1 lg:order-2            /* mobile first, desktop second */
        "
        src={image}
        alt=""
      />

      {/* TEXT CONTENT (Mobile second, Desktop first) */}
      <div className="order-2 lg:order-1 text-center lg:text-left">
        {/* Mobile text smaller; desktop original size */}
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">
          Hello <br /> I'm <br /> Deepta Dutta
        </h1>

        <p className="text-2xl sm:text-3xl lg:text-4xl font-medium mt-4 mb-2 text-[#47d267]">
          <Typewriter
            words={["A MERN Stack Developer"]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1800}
          />
        </p>

        {/* Text readable on mobile but SAME on desktop */}
        <p className="font-normal text-base sm:text-lg lg:text-lg leading-relaxed ">
          Full Stack Web Developer specializing in JavaScript, React.js,
          <br className="hidden lg:block" />
          Next.js, Redux, Node.js, and Express.js. Proficient in creating
          <br className="hidden lg:block" />
          dynamic, responsive UIs with React, Tailwind CSS, and Material UI,
          <br className="hidden lg:block" />
          and developing robust backend APIs. Skilled in delivering seamless
          <br className="hidden lg:block" />
          user experiences with efficient state management, with basic <br className="hidden lg:block" /> TypeScript knowledge.
        </p>

        {/* Buttons + Social */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mt-5">
          <a
            href='/deepta dutta finalCV (Autosaved).docx-2.pdf'
            download
            target="blank"
            rel="noopener noreferrer"
          >
            <button className="flex gap-2 items-center cursor-pointer btn-outline border border-[#47d267] font-semibold text-[#47d267] hover:bg-[#47d267] hover:text-black px-6 py-2 rounded-2xl transition">
              Download Resume <FaArrowAltCircleDown />
            </button>
          </a>

          <div className="flex gap-4 items-center">
            <a href="https://github.com/Deepto41" target="blank">
              <MarkGithubIcon size={30} />
            </a>
            <a href="https://www.facebook.com/deepto.19" target="blank">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.linkedin.com/in/deeptodutta/" target="blank">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
