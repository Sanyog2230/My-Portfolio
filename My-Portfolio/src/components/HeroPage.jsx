import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroPage = () => {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= 808 && window.innerHeight >= 626
  );

  // Screen size detection
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 808 && window.innerHeight >= 626);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleReload = () => window.location.reload();
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const underlineStyle = `
    relative pb-1 text-base sm:text-lg text-white/90
    bg-gradient-to-r from-white to-white
    bg-[length:0%_2px] bg-no-repeat bg-left-bottom
    transition-[background-size] duration-300
    hover:bg-[length:100%_2px]
  `;

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">

      {/* Navbar */}
      <motion.nav
        className="absolute top-0 left-0 z-30 flex w-full items-center justify-between
                   px-6 sm:px-10 md:px-16 py-6 sm:py-8 font-['Montserrat'] font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.5 }}
      >
        <span
          className={`${underlineStyle} cursor-pointer`}
          onClick={handleReload}
        >
          Hi, I am Sanyog
        </span>

        <span
          className={`${underlineStyle} cursor-pointer`}
          onClick={scrollToContact}
        >
          Contact me
        </span>
      </motion.nav>

      {/* Content */}
      <div className="relative z-20 flex min-h-screen items-center px-6 sm:px-10 md:px-12">
        <div className="flex flex-col w-full">

          {/* Title */}
          <motion.div
            className="mt-[20vh] mb-12"
            initial={isDesktop ? { y: 40, opacity: 0 } : false}
            animate={isDesktop ? { y: 0, opacity: 1 } : false}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="font-medium leading-none font-['Montserrat']
              text-[clamp(3rem,8vw,8rem)] sm:text-[clamp(5rem,10vw,12rem)]">
              Web
            </h1>

            <h1 className="font-semibold leading-none -mt-2 sm:-mt-4 font-['Montserrat']
              text-[clamp(3rem,8vw,8rem)] sm:text-[clamp(5rem,10vw,12rem)]">
              Developer
            </h1>
          </motion.div>

          {/* Line */}
          <motion.div
            className="bg-white h-[4px] w-full sm:w-[70%] md:w-[53vw]"
            initial={isDesktop ? { scaleX: 0, originX: 0 } : false}
            animate={isDesktop ? { scaleX: 1 } : false}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />

          {/* About Section */}
          <motion.div
            className={`mt-8 text-white/90 ${isDesktop ? "w-[50vw]" : "w-full"}`}
            initial={isDesktop ? { opacity: 0 } : false}
            animate={isDesktop ? { opacity: 1 } : false}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-10 md:gap-24 lg:gap-60">
              <span className="font-['InstrumentSerif'] text-2xl sm:text-3xl md:text-4xl italic text-white/70 whitespace-nowrap">
                <span className="text-xl md:text-2xl">00</span> About
              </span>

              <p className="text-sm sm:text-base md:text-md font-medium leading-relaxed font-['Montserrat']">
                Hi, I’m Sanyog, a frontend developer passionate about crafting
                interactive and user-friendly interfaces. I specialize in building
                responsive web experiences with clean code, smooth animations, and
                attention to detail. My goal is to create interfaces that are easy to
                use, visually clear, and enjoyable for users.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroPage;
