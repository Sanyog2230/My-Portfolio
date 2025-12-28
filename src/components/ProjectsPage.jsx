import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectsPage = () => {
  const projectLinks = [
    "https://award-tau.vercel.app/",
    "https://zynx-cloth.vercel.app/",
    "https://elite-sky-bar.vercel.app/",
    "https://archon-nine.vercel.app/",
    "https://iwm-eight.vercel.app/",
    "https://setia-main.vercel.app/",
  ];

  const projectImages = [
    "/images/card1.png",
    "/images/card2.png",
    "/images/card3.png",
    "/images/card4.png",
    "/images/card5.png",
    "/images/card6.png",
  ];

  const projectTitles = [
    "Redefine Gaming",
    "Raysen",
    "Elite Sky Bar",
    "Archon Nine",
    "IWM",
    "Setia Arts",
  ];

  // detect mobile/tablet
  const isDesktop = typeof window !== "undefined" ? window.innerWidth >= 1024 : true;

  return (
    <div className="w-full pt-20 px-6 sm:px-10 lg:px-12 bg-transparent text-white flex flex-col">

      {/* Animated Line */}
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

      {/* Heading + Info */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-start">

          {/* Left title */}
          <span className="font-['InstrumentSerif'] text-3xl sm:text-4xl italic tracking-wide text-white/70 whitespace-nowrap">
            <span className="text-xl sm:text-2xl">02</span> Projects
          </span>

          {/* Right aligned content */}
          <div className="w-full lg:w-[55vw] lg:pl-18">
            <p className="text-md sm:text-md font-medium leading-relaxed text-white/90 font-['Montserrat']">
              Below are a few projects I’ve worked on, showcasing my experience
              in creating interactive, responsive, and user-focused web
              interfaces with clean and maintainable frontend code.
            </p>
          </div>

        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projectLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            initial={isDesktop ? { opacity: 0, y: 40 } : { opacity: 0 }}
            whileInView={isDesktop ? { opacity: 1, y: 0 } : { opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
          >
            <div className="relative w-full aspect-[1/1] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 group-hover:scale-[1.03]">

              <img
                src={projectImages[i]}
                alt={projectTitles[i]}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 w-full bg-black/60 p-4">
                <h3 className="text-white text-lg font-semibold font-['Montserrat']">
                  {projectTitles[i]}
                </h3>
              </div>

              {/* Arrow */}
              <div className="absolute top-4 right-4">
                <ArrowUpRight className="w-5 h-5 text-white/80" />
              </div>

            </div>
          </motion.a>
        ))}
      </motion.div>

    </div>
  );
};

export default ProjectsPage;
