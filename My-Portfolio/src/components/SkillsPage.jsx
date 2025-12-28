import React from "react";
import { motion } from "framer-motion";

const SkillsPage = () => {
  return (
    <div className="w-full pt-20 px-12 bg-black text-white flex flex-col">
      
      {/* Gray + White Animated Line */}
      <div className="relative w-[53vw] h-[0.5vh] bg-white/30 overflow-hidden mb-10">
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
        className="w-[60vw]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex items-start justify-between w-[53vw] gap-24">
          
          {/* Section Title */}
          <span className="font-['InstrumentSerif'] text-4xl italic tracking-wide text-white/70 whitespace-nowrap">
            <span className="text-2xl">04</span> Skills
          </span>

          {/* Skills List */}
          <div className="w-[30vw]  grid grid-cols-2 gap-x-6 gap-y-4 font-['Montserrat'] text-md font-medium">
            
            {/* Left Column */}
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                HTML
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                CSS
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
                React JS
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                Responsive Web Design
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                Visual Design
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                Version Control
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                GSAP & Framer motion
              </li>
            </ul>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
