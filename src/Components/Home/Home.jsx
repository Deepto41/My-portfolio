import React from "react";
import image from "../../assets/Gemini_Generated_Image_9svbes9svbes9svb.png";
import { MarkGithubIcon } from "@primer/octicons-react";
import { FaArrowAltCircleDown, FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div
      id="home"
      className="mt-20 mb-4 flex justify-around items-center h-screen
    "
    >
      <div>
        {/* right side content */}
        <h1 className="font-bold text-7xl ">
          Hello <br /> I'm <br /> Deepta Dutta
        </h1>
        <p className="text-3xl font-medium mt-4 mb-2 text-[#47d267]">
          {" "}
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
        <span className="font-normal mb-2 text-lg ">
          Full Stack Web Developer specializing in JavaScript, React.js,
          <br />
          Next.js, Redux, Node.js, and Express.js.Proficient in creating <br />
          dynamic, responsive UIs with React,Tailwind CSS, and Material UI,
          <br /> and developing robust backend APIs. Skilled in delivering{" "}
          <br /> seamless user experiences with efficient state management,with
          basic <br /> TypeScript knowledge.
        </span>

        <div className="flex items-center  gap-5 mt-3">
          <div>
            <a
              href="https://docs.google.com/document/d/1pzrhivXLBxO02XX-3bNbrnkgl4XxqGQ4/export?format=pdf
"
            >
              <button className=" flex gap-2 items-center cursor-pointer btn-outline border border-[#47d267] font-semibold text-[#47d267] hover:bg-[#47d267] hover:text-black px-5 py-2 mt-3 rounded-2xl">
                Download Resume <FaArrowAltCircleDown />
              </button>
            </a>
          </div>

          <div className="flex gap-4 items-center mt-3 ml-2">
            <a href="https://github.com/Deepto41" target="blank">
              {" "}
              <MarkGithubIcon size={30} />
            </a>
            <a href="https://www.facebook.com/deepto.19" target="blank">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.linkedin.com/in/deeptodutta/" target="blank">
              {" "}
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
      {/* right side content */}
      <img
        className="w-90 h-90 rounded-full border outline-2 p-1 outline-[#47d267] border-[#47d267] -mt-18"
        src={image}
        alt=""
      />
    </div>
  );
};

export default Home;
