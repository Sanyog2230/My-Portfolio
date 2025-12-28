import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MainLayout = ({ children }) => {
  const [heroProgress, setHeroProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white flex">

      {/* LEFT SIDE: scrollable content */}
      <div className="relative w-full md:w-[60%] z-10">
        {typeof children === "function"
          ? children({ setHeroProgress })
          : children}
      </div>

      {/* RIGHT SIDE: persistent image (desktop only animation) */}
      <div className="hidden md:block md:w-[40%]">
        <motion.img
          src="./images/san.png"
          alt="Hero Visual"
          className="
            fixed top-1/2 right-0 -translate-y-1/2
            h-[150%] w-auto
            pointer-events-none select-none
            transform-gpu will-change-transform
          "
          style={{
            scale: isMobile ? 1 : 1.1 - heroProgress * 0.4,
            x: isMobile ? 0 : heroProgress * 140,
            y: isMobile ? 0 : heroProgress * 40,
          }}
        />
      </div>

    </div>
  );
};

export default MainLayout;
