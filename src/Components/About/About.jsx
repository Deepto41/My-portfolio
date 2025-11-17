import React from "react";
import { IoMdPerson } from "react-icons/io";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="mt-20 mx-auto w-11/12">
      <div className="flex flex-col items-center">
        <button className="mb-6 -mr-3 rounded-3xl border px-6 py-2 w-fit flex items-center gap-2 hover:text-black hover:bg-[#47d267] text-lg">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <IoMdPerson size={25} />
          </motion.div>{" "}
          ABOUT
        </button>

        <h2 className="font-bold text-5xl text-center">
          About <span className="text-[#47d267]">Me</span>
        </h2>
      </div>
      <div className="text-center mt-6 text-xl ">
        Hello! I am Deepta Dutta, a dedicated and enthusiastic React front-end
        developer with a solid foundation in Mern-stack development. Since 2024,
        I’ve been building my journey in web development, starting as a
        self-learner and later sharpening my skills in the MERN stack through
        Programming Hero. I’ve focused on gaining hands-on experience and
        deepening my knowledge of modern web technologies. <br /> <br />
        I truly enjoy bringing ideas to life with modern, clean, and interactive
        user interfaces using React.js. I thrive on solving challenging coding
        problems and crafting smooth, engaging user experiences that make the
        web feel simple and powerful. <br /> <br />
        Beyond programming, I have a love for solving math problems — numbers
        and logic have always fascinated me. <br /> <br />
        I’m always eager to learn, grow, and build meaningful projects that help
        people and sharpen my skills as a developer and problem solver.
      </div>
    </div>
  );
};

export default About;



