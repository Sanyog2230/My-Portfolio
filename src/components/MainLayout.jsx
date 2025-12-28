import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MainLayout = ({ children }) => {
  const [heroProgress, setHeroProgress] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const [screenType, setScreenType] = useState("desktop"); // desktop | tablet | mobile

  // detect screen type
  useEffect(() => {
    const detectScreen = () => {
      const width = window.innerWidth;
      if (width < 768) setScreenType("mobile");
      else if (width >= 768 && width < 1024) setScreenType("tablet");
      else setScreenType("desktop");
    };
    detectScreen();
    window.addEventListener("resize", detectScreen);
    return () => window.removeEventListener("resize", detectScreen);
  }, []);

  // scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (!triggered && scrollY > 10) setTriggered(true);
      if (triggered && scrollY < 50) setTriggered(false);

      setHeroProgress(Math.min(scrollY / 300, 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggered]);

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">

      {/* MOBILE HERO IMAGE */}
      {screenType === "mobile" && (
        <motion.div
          className="fixed inset-0 z-0 flex items-center justify-center md:hidden"
          animate={{
            scale: triggered ? 1.05 : 1,
            x: 0,
            y: triggered ? -20 : -70,
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.6 }}
        >
          <img
            src="/images/san.png"
            alt="Hero Visual"
            className="h-[150%] w-auto object-contain select-none pointer-events-none"
          />
          {triggered && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-none" />
          )}
        </motion.div>
      )}

      {/* TABLET HERO IMAGE */}
      {screenType === "tablet" && (
        <motion.div
          className="fixed inset-0 z-0 flex items-center justify-center md:flex lg:hidden"
          animate={{
            scale: triggered ? 1.02 : 1,  // slight scale up
            x: 0,                        // center
            y: triggered ? -15 : -50,    // slight upward shift
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.6 }}
        >
          <img
            src="/images/san.png"
            alt="Hero Visual"
            className="h-[150%] w-auto object-contain select-none pointer-events-none"
          />
          {triggered && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-none" />
          )}
        </motion.div>
      )}

      {/* DESKTOP HERO IMAGE */}
      {screenType === "desktop" && (
        <motion.div
          className="hidden md:flex fixed inset-0 z-0 items-center justify-center pointer-events-none"
          animate={{
            scale: triggered ? 0.7 : 1.1,
            x: triggered ? 420 : 0,
            y: triggered ? 60 : 0,
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.6 }}
        >
          <img
            src="/images/san.png"
            alt="Hero Visual"
            className="h-[150%] w-auto object-contain select-none pointer-events-none"
          />
        </motion.div>
      )}

      {/* LEFT SIDE CONTENT */}
      <div className="relative z-10 flex w-full md:w-[60%]">
        {typeof children === "function"
          ? children({ setHeroProgress })
          : children}
      </div>
    </div>
  );
};

export default MainLayout;
