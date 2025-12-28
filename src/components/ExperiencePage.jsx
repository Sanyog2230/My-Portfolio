import React from "react";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  return (
    <div
      className="
        w-full bg-transparent text-white flex flex-col
        px-6 sm:px-10 lg:px-12
        pt-20
      "
    >
      {/* Line */}
      <div
        className="
          relative h-[0.5vh] bg-white/30 overflow-hidden mb-10
          w-full
          lg:w-[53vw]
          mx-auto lg:mx-0
        "
      >
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
        className="
          w-full
          lg:w-[60vw]
          mx-auto lg:mx-0
        "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div
          className="
            flex flex-col lg:flex-row items-start
            gap-6 sm:gap-8 lg:gap-40
          "
        >
          {/* Title */}
          <span
            className="
              font-['InstrumentSerif'] italic tracking-wide text-white/70 whitespace-nowrap
              text-3xl sm:text-4xl
            "
          >
            <span className="text-xl lg:text-2xl">01</span> Experience
          </span>

          {/* Content */}
          <div
            className="
              w-full
              lg:w-[30vw]
            "
          >
            <p
              className="
                font-medium leading-relaxed text-white/90 font-['Montserrat']
                text-sm sm:text-base lg:text-md
              "
            >
              During my one year as a Frontend Developer at Switch Bear Studio, I
              focused on creating interactive and user-focused interfaces. I
              worked closely with designers to build responsive layouts, enhance
              usability, and deliver clean, maintainable frontend code that
              improved the overall user experience.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperiencePage;
