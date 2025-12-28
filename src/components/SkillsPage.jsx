import React from "react";
import { motion } from "framer-motion";

const SkillsPage = () => {
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

      {/* Skills Section */}
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
            <span className="text-xl sm:text-2xl">04</span> Skills
          </span>

          {/* Right Content */}
          <div className="w-full lg:w-[55vw] lg:pl-22 grid grid-cols-2 gap-x-6 gap-y-4 font-['Montserrat'] text-md font-medium">

            {/* Left Column */}
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                HTML
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                Responsive Web Design
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                JavaScript
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                Tailwind CSS
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                Deployment
              </li>
            </ul>

            {/* Right Column */}
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                CSS
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                GSAP & Framer Motion
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                React JS
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                Version Control
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                Visual Design
              </li>
            </ul>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
