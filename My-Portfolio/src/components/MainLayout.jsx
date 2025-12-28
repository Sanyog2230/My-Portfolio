import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MainLayout = ({ children }) => {
  const [heroProgress, setHeroProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024); // tablet included
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white flex">

      {/* LEFT SIDE */}
      <div className="relative w-full md:w-[60%] z-10">
        {typeof children === "function"
          ? children({ setHeroProgress })
          : children}
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:block md:w-[40%]">
        {!isMobile ? (
          /* DESKTOP: animated */
          <motion.img
            src="./images/san.png"
            alt="Hero Visual"
            className="
              fixed top-1/2 right-0 -translate-y-1/2
              h-[150%] w-auto
              pointer-events-none select-none
              transform-gpu
            "
            style={{
              scale: 1.1 - heroProgress * 0.4,
              x: heroProgress * 140,
              y: heroProgress * 40,
            }}
          />
        ) : (
          /* MOBILE/TABLET: NO FIXED, NO MOTION */
          <img
            src="./images/san.png"
            alt="Hero Visual"
            className="hidden"
          />
        )}
      </div>

    </div>
  );
};

export default MainLayout;
