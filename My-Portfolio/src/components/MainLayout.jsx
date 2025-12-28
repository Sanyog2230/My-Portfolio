import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MainLayout = ({ children }) => {
  const [heroProgress, setHeroProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white flex">

      {/* LEFT CONTENT */}
      <div className="relative w-full md:w-[60%] z-10">
        {typeof children === "function"
          ? children({
              setHeroProgress: isDesktop ? setHeroProgress : () => {}
            })
          : children}
      </div>

      {/* RIGHT IMAGE */}
      {isDesktop && (
        <div className="hidden md:block md:w-[40%]">
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
        </div>
      )}
    </div>
  );
};

export default MainLayout;
