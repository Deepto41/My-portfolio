import React from "react";
import { IoMdMail, IoMdPerson } from "react-icons/io";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    // Add your Web3Forms access key here
    formData.append("access_key", "8c4f8c03-6f61-4a96-8673-f3350524b6bc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Message sent successfully!",
          icon: "success",
          draggable: true,
        });
        event.target.reset();
      } else {
        Swal.fire({
          title: "Failed to send message!",
          text: data.message || "Please try again later.",
          icon: "error",
          draggable: true,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Failed to send message!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        draggable: true,
      });
      console.error(error);
    }
  };

  return (
    <div id="contacts" className="mt-40 mx-auto w-11/12 mb-20">
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
            <IoMdMail size={25} />
          </motion.div>{" "}
          Contact
        </button>

        <h2 className="font-bold text-5xl text-center mb-8">
          <span className="text-[#47d267]"> Get</span> In{" "}
          <span className="text-[#47d267]">Touch</span>
        </h2>
      </div>

      {/* contact section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left section */}
        <div className="border rounded-2xl p-8 flex-1  text-white">
          <h2 className="text-4xl font-bold mb-8 mt-3">
            <span className="text-[#47d267]">Let's </span>Talk
          </h2>
          <p className="mb-10 ">
            I am available for freelance projects, professional collaborations,
            or any inquiries related to frontend development. Please feel free
            to get in touch to discuss opportunities or potential partnerships.
          </p>
          <p className="flex gap-3 mt-3 items-center">
            <IoMdPerson className="text-[#47d267]" size={25} />
            Deepta Dutta
          </p>
          <p className="flex gap-3 mt-3 items-center">
            <IoMdMail className="text-[#47d267]" size={25} />
            deeptaduttaksp@gmail.com
          </p>
          <p className="flex gap-3 mt-3 items-center">
            <FaPhoneAlt className="ml-1 text-[#47d267]" size={20} />
            +8801989316366
          </p>
          <p className="flex mt-3 items-center gap-3">
            <FaLocationDot className="text-[#47d267]" size={24} /> Khulna, Bangladesh
          </p>
        </div>

        {/* Right section */}
        <div className="border rounded-2xl flex-1  p-6 shadow-lg">
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-lg border border-gray-700 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-all duration-300 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-lg border border-gray-700 bg-transparent text-white focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-all duration-300 w-full"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="px-4 py-3 rounded-lg border border-gray-700 bg-transparent text-white focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-all duration-300 w-full"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              className="px-4 py-3 rounded-lg border border-gray-700 bg-transparent text-white focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-all duration-300 resize-none w-full"
            ></textarea>
            <button
              type="submit"
              className="mt-2 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
