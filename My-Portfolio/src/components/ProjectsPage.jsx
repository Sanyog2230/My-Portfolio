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

      {/* Projects Heading + Description */}
      <motion.div
        className="w-[60vw]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex items-start justify-between w-[53vw] gap-24">
          <span className="font-['InstrumentSerif'] text-4xl italic tracking-wide text-white/70 whitespace-nowrap">
            <span className="text-2xl">02</span> Projects
          </span>

          <div className="w-[30vw]">
            <p className="text-md font-medium leading-relaxed text-white/90 font-['Montserrat']">
              Below are a few projects I’ve worked on, showcasing my experience in creating interactive,
              responsive, and user-focused web interfaces with clean and maintainable frontend code.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Projects Cards */}
      <motion.div
        className="mt-20 flex flex-col gap-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* First Row */}
        <div className="flex gap-12">
          {[0, 1, 2].map((i) => (
            <a
              key={i}
              href={projectLinks[i]}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[32vh]"
            >
              <div className="relative w-full h-[32vh] rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.03] transition-transform duration-300">
                <img
                  src={projectImages[i]}
                  alt={projectTitles[i]}
                  className="w-full h-full object-cover"
                />
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-black/60 p-3">
                  <h3 className="text-white text-lg font-semibold font-['Montserrat']">{projectTitles[i]}</h3>
                </div>
                {/* Arrow icon */}
                <div className="absolute top-4 right-4">
                  <ArrowUpRight className="w-5 h-5 text-white/80" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex gap-12">
          {[3, 4, 5].map((i) => (
            <a
              key={i}
              href={projectLinks[i]}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[32vh]"
            >
              <div className="relative w-full h-[32vh] rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.03] transition-transform duration-300">
                <img
                  src={projectImages[i]}
                  alt={projectTitles[i]}
                  className="w-full h-full object-cover"
                />
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-black/60 p-3">
                  <h3 className="text-white text-lg font-semibold font-['Montserrat']">{projectTitles[i]}</h3>
                </div>
                {/* Arrow icon */}
                <div className="absolute top-4 right-4">
                  <ArrowUpRight className="w-5 h-5 text-white/80" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
