import React from "react";
import { motion } from "framer-motion";
import { GiGraduateCap } from "react-icons/gi";

const Education = () => {
  return (
    <div id="education" className="mt-40 mx-auto w-11/12 mb-10">
      <div  className="flex flex-col items-center mb-6">
        <button  data-aos="fade-down"
        data-aos-duration="3000" className="mb-6 -mr-3 rounded-3xl border px-6 py-2 w-fit flex items-center gap-2 hover:text-black hover:bg-[#47d267] text-lg">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <GiGraduateCap size={25} />
          </motion.div>{" "}
          EDUCATION
        </button>
      </div>

      <div className="relative border-l-4 border-green-500 pl-10">
        {/* B.Sc. Honours */}
        <div className="relative mb-16">
          <div
            className="absolute -left-13 top-4 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"
            style={{ opacity: 1 }}
          ></div>
          <div style={{ opacity: 1 }}>
            <time className="block text-sm text-gray-400 mb-1">
              2022 - Present
            </time>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">
              B.B.A Honours in HRM
            </h3>
            <p className="text-green-600 text-lg font-semibold mb-3">
              Northern University of Business & technology, Khulna
            </p>
            <p className="text-gray-400 leading-relaxed max-w-xl">
              Currently pursuing my Bachelor of Business Administration with
              Honours in Human Resource Management at NUBTK. This program is
              developing my skills in leadership, management, and organizational
              behavior, which complement my problem-solving and teamwork
              abilities as a developer.
            </p>
          </div>
        </div>

        {/* HSC */}
        <div className="relative mb-10">
          <div
            className="absolute -left-13 top-3 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"
            style={{ opacity: 1 }}
          ></div>
          <div  style={{ opacity: 1 }}>
            <time  data-aos="fade-left"
        data-aos-duration="2000" className="block text-sm text-gray-400 mb-1">
              2017 - 2019
            </time>
            <h3  data-aos="fade-left"
        data-aos-duration="2000" className="text-2xl font-bold text-gray-400 mb-2">
              Higher Secondary Certificate (HSC)
            </h3>
            <p  data-aos="fade-left"
        data-aos-duration="2000" className="text-green-600 text-lg font-semibold mb-3">
              Government Keshabpur College, Jashore
            </p>
            <p  data-aos="fade-left"
        data-aos-duration="2000" className="text-gray-400 leading-relaxed max-w-xl">
              Completed my Higher Secondary Certificate in the Science stream.
              This phase built a strong foundation in mathematics and sciences,
              strengthening my analytical and problem-solving skills, which I
              continue to apply in my work as a developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
