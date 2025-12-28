import React from 'react'
import { motion } from "framer-motion";

const EducationPage = () => {
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

      {/* About Section */}
      <motion.div
        className="w-[60vw]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex items-start justify-between w-[53vw] gap-24">
          <span className="font-['InstrumentSerif'] text-4xl italic tracking-wide text-white/70 whitespace-nowrap">
            <span className="text-2xl">03</span> Education
          </span>

          <div className="w-[30vw]">
            <p className="text-md  font-medium leading-relaxed text-white/90 font-['Montserrat']">
             I am currently pursuing Bachelor’s of Technology in Computer Science at World College 
             of Technology and Management, Gurugram. My studies are helping me build a strong foundation
              in computer science while deepening my interest in frontend development and responsive web
               interfaces.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default EducationPage