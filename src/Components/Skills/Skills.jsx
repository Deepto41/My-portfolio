import React from "react";
import { IoMdPerson } from "react-icons/io";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import logo1 from '../../assets/skills/html5-without-wordmark-color-seeklogo.png'
import logo2 from '../../assets/skills/css-3-seeklogo.png'
import logo3 from '../../assets/skills/javascript-js-seeklogo.png'
import logo4 from '../../assets/skills/tailwind-css-seeklogo.png'
import logo5 from '../../assets/skills/npm-node-package-manager-seeklogo.png'
import logo6 from '../../assets/skills/react-seeklogo(1).png'
import logo7 from '../../assets/skills/next-js-seeklogo.png'
import logo8 from '../../assets/skills/node-js-seeklogo.png'
import logo9 from '../../assets/skills/github-seeklogo.png'
import logo10 from '../../assets/skills/mongodb-seeklogo.png'
import logo11 from '../../assets/skills/firebase-icon-seeklogo.png'
import logo12 from '../../assets/skills/jwt-seeklogo.png'
import logo13 from '../../assets/skills/netlify-icon-seeklogo.png'
import logo14 from '../../assets/skills/vercel-seeklogo.png'
import logo15 from '../../assets/skills/figma-seeklogo.png'
import logo16 from '../../assets/skills/express-js-seeklogo.png'


const Skills = () => {
  return (
    <div id="skills" className="mt-40 mx-auto w-11/12  mb-10">
      <div className="flex flex-col items-center mb-6">
        <button className="mb-6 -mr-3 rounded-3xl border px-6 py-2 w-fit flex items-center gap-2 hover:text-black hover:bg-[#47d267] text-lg">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaTools size={25} />
          </motion.div>{" "}
          SKILLS
        </button>

        <h2 className="font-bold text-5xl text-center mb-10">
          Tech <span className="text-[#47d267]">Stack</span>
        </h2>
      </div>
      <div>
        <Marquee pauseOnHover='true'>
          <div className=" mr-20 pr-5 flex flex-col items-center">
            <img className="w-23 h-23" src={logo1} alt="" />
            <h2 className="text-xl mt-2 font-semibold">HTML</h2>
          </div>

          <div className="flex flex-col items-center mr-20 pr-5">
            <img className="w-23 h-23 " src={logo2} alt="" />
            <h2 className="text-xl mt-2 font-semibold">CSS</h2>
          </div>

          <div className="flex flex-col items-center mr-20 pr-5">
            <img className="w-23 h-23 " src={logo3} alt="" />
            <h2 className="text-xl mt-2 font-semibold">JAVASCRIPT</h2>
          </div>

          <div className="flex flex-col items-center mr-20 pr-5">
            <img className="w-25 h-15 " src={logo4} alt="" />
            <h2 className="text-xl mt-10 font-semibold">TAILWINDCSS</h2>
          </div>

          <div className="flex flex-col items-center mr-20 pr-5">
            <img className="w-25 h-10" src={logo5} alt="" />
            <h2 className="text-xl mt-15 font-semibold">NPM</h2>
          </div>

          <div className="flex flex-col items-center mr-20 pr-5">
            <img className="w-22 h-20" src={logo6} alt="" />
            <h2 className="text-xl mt-5 font-semibold">REACT.JS</h2>
          </div>

          <div className="flex flex-col items-center mr-20 pr-5">
            <img className="w-22 h-20" src={logo7} alt="" />
            <h2 className="text-xl mt-5 font-semibold">NEXT.JS</h2>
          </div>

          <div className="flex flex-col items-center mr-20 pr-5">
            <img className="w-20 h-20" src={logo8} alt="" />
            <h2 className="text-xl mt-5 font-semibold">NODE.JS</h2>
          </div>

          <div className="flex flex-col items-center mr-20 pr-5">
            <img className="w-22 h-20" src={logo9} alt="" />
            <h2 className="text-xl mt-5 font-semibold">GITHUB</h2>
          </div>

          <div className="flex flex-col items-center mr-20 pr-5">
            <img className="w-22 h-20" src={logo10} alt="" />
            <h2 className="text-xl mt-5 font-semibold">MONGODB</h2>
          </div>

          <div className="flex flex-col items-center mr-20 pr-5">
            <img className="w-22 h-20" src={logo11} alt="" />
            <h2 className="text-xl mt-5 font-semibold">FIREBASE</h2>
          </div>

          <div className="flex flex-col items-center mr-20 pr-5">
            <img className="w-22 h-20" src={logo12} alt="" />
            <h2 className="text-xl mt-5 font-semibold">JWT</h2>
          </div>

          <div className="flex flex-col items-center mr-20 pr-5">
            <img className="w-22 h-19" src={logo13} alt="" />
            <h2 className="text-xl mt-5 font-semibold">NETLIFY</h2>
          </div>

          <div className="flex flex-col items-center mr-20 pr-5">
            <img className="w-22 h-20" src={logo14} alt="" />
            <h2 className="text-xl mt-5 font-semibold">VERCEL</h2>
          </div>

          <div className="flex flex-col items-center mr-20 pr-5">
            <img className="w-20 h-20" src={logo15} alt="" />
            <h2 className="text-xl mt-5 font-semibold">FIGMA</h2>
          </div>
          
          <div className="flex flex-col items-center mr-20 pr-5">
            <img className="w-50 h-20" src={logo16} alt="" />
            <h2 className="text-xl mt-5 font-semibold">EXPRESS.JS</h2>
          </div>
       
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
