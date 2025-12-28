// HeroPage.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroPage = ({ setHeroProgress }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [showNavbarContent, setShowNavbarContent] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY === 0) setShowNavbarContent(true);
      else if (showNavbarContent) setShowNavbarContent(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showNavbarContent]);

  useEffect(() => {
    if (!setHeroProgress) return;
    const onScroll = () => setHeroProgress(Math.min(window.scrollY / 300, 1));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [setHeroProgress]);

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
    <div
      className="
        relative w-full bg-transparent text-white overflow-hidden
        min-h-auto lg:min-h-screen
      "
    >
      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 z-50 flex w-full items-center justify-between
                   px-6 sm:px-10 lg:px-16 py-6 sm:py-8 font-['Montserrat'] font-medium"
      >
        <motion.div
          initial={isDesktop ? { y: 40, opacity: 0 } : false}
          animate={showNavbarContent ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex w-full justify-between"
        >
          <span className={`${underlineStyle} cursor-pointer`} onClick={handleReload}>
            Hi, I am Sanyog
          </span>
          <span className={`${underlineStyle} cursor-pointer`} onClick={scrollToContact}>
            Contact me
          </span>
        </motion.div>
      </motion.nav>

      {/* Hero content */}
      <div
        className="
          relative z-20 flex items-start w-full
          px-6 sm:px-10 lg:px-12
          pt-40 lg:pt-0
          min-h-auto lg:min-h-screen
        "
      >
        <div className="flex flex-col w-full">

          {/* Title */}
          <motion.div
            className="mt-[20vh] mb-8 lg:mb-12"
            initial={isDesktop ? { y: 40, opacity: 0 } : false}
            animate={isDesktop ? { y: 0, opacity: 1 } : false}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="font-medium leading-none font-['Montserrat']
              text-[clamp(3rem,8vw,8rem)] sm:text-[clamp(5rem,10vw,12rem)]">
              Web
            </h1>
            <h1 className="font-semibold leading-none -mt-1 sm:-mt-2 lg:-mt-2 font-['Montserrat']
              text-[clamp(3rem,8vw,8rem)] sm:text-[clamp(5rem,10vw,12rem)]">
              Developer
            </h1>
          </motion.div>

          {/* Line */}
          <motion.div
            className="bg-white h-[4px] w-full sm:w-[70%] lg:w-[53vw]"
            initial={isDesktop ? { scaleX: 0, originX: 0 } : false}
            animate={isDesktop ? { scaleX: 1 } : false}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />

          {/* About Section */}
          <motion.div
            className={`mt-4 lg:mt-8 text-white/90 ${isDesktop ? "w-[50vw]" : "w-full"}`}
            initial={isDesktop ? { opacity: 0 } : false}
            animate={isDesktop ? { opacity: 1 } : false}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-8 lg:gap-24 xl:gap-60">
              <span className="font-['InstrumentSerif'] text-2xl sm:text-3xl lg:text-4xl italic text-white/70 whitespace-nowrap">
                <span className="text-xl lg:text-2xl">00</span> About
              </span>

              <p className="text-sm sm:text-base lg:text-md font-medium leading-relaxed font-['Montserrat']">
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
