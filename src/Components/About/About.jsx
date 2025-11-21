import React from "react";
import { IoMdPerson } from "react-icons/io";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="mt-20 px-4 md:px-8 lg:px-20  w-11/12 mx-auto "
    >
      {/* Heading */}
      <div
       
        className="flex flex-col items-center text-center  "
      >
        <button   className="mb-6 rounded-3xl border px-6 py-2 w-fit flex items-center gap-2 text-lg font-medium text-[#47d267] hover:text-black hover:bg-[#47d267] transition-colors duration-300">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <IoMdPerson size={25} />
          </motion.div>
          ABOUT
        </button>

        <h2  data-aos="fade-up"
        data-aos-duration="3000" className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
          About <span className="text-[#47d267]">Me</span>
        </h2>
      </div>

      {/* Description */}
      <div  data-aos="fade-up"
        data-aos-duration="3000" className="mt-6 text-center text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose dark:text-gray-300">
        <p>
          Hello! I am <span className="font-semibold">Deepta Dutta</span>, a
          dedicated and enthusiastic React front-end developer with a solid
          foundation in MERN-stack development. Since 2024, I’ve been building
          my journey in web development, starting as a self-learner and later
          sharpening my skills in the MERN stack through Programming Hero. I’ve
          focused on gaining hands-on experience and deepening my knowledge of
          modern web technologies.
        </p>

        <p className="mt-4">
          I truly enjoy bringing ideas to life with modern, clean, and
          interactive user interfaces using React.js. I thrive on solving
          challenging coding problems and crafting smooth, engaging user
          experiences that make the web feel simple and powerful.
        </p>

        <p className="mt-4">
          Beyond programming, I have a love for solving math problems — numbers
          and logic have always fascinated me.
        </p>

        <p className="mt-4">
          I’m always eager to learn, grow, and build meaningful projects that
          help people and sharpen my skills as a developer and problem solver.
        </p>
      </div>
    </section>
  );
};

export default About;
