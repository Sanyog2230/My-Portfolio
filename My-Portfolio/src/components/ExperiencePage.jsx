import React from "react";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  return (
    <div className=" w-full pt-20 px-12 bg-black text-white flex flex-col">
        
    
      {/* Gray + White Animated Line (scroll triggered) */}
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

      

      {/* Experience Section */}
      <motion.div
        className="w-[60vw]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-10 md:gap-24 lg:gap-40">
          <span className="font-['InstrumentSerif'] text-4xl italic tracking-wide text-white/70 whitespace-nowrap">
            <span className="text-2xl">01</span> Experience
          </span>

          <div className="w-[30vw]">
            <p className="text-md  font-medium leading-relaxed text-white/90 font-['Montserrat']">
             During my one year as a Frontend Developer at Switch Bear Studio, I focused on creating
              interactive and user-focused interfaces. I worked closely with designs to build responsive
               layouts, enhance usability, and deliver clean, maintainable frontend code that improved
                the overall user experience.
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default ExperiencePage;
