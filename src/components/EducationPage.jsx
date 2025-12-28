import React from 'react';
import { motion } from "framer-motion";

const EducationPage = () => {
  return (
    <div className="w-full pt-20 px-6 sm:px-10 lg:px-12 bg-transparent text-white flex flex-col">

      {/* Gray + White Animated Line */}
      <div className="relative w-full lg:w-[53vw] h-[2px] bg-white/30 overflow-hidden mb-10">
        <motion.div
          className="absolute left-0 top-0 h-full bg-white"
          style={{ width: "30%" }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>

      {/* Education Section */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-start">

          {/* Left Title */}
          <span className="font-['InstrumentSerif'] text-3xl sm:text-4xl italic tracking-wide text-white/70 whitespace-nowrap">
            <span className="text-xl sm:text-2xl">03</span> Education
          </span>

          {/* Right Content */}
          <div className="w-full lg:w-[55vw] lg:pl-12">
            <p className="text-md sm:text-md font-medium leading-relaxed text-white/90 font-['Montserrat']">
             I am currently pursuing Bachelor’s of Technology in Computer Science at World College 
             of Technology and Management, Gurugram. My studies are helping me build a strong foundation
             in computer science while deepening my interest in frontend development and responsive web
             interfaces.
            </p>
          </div>

        </div>
      </motion.div>

    </div>
  );
}

export default EducationPage;
