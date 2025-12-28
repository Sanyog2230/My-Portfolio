import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MainLayout = ({ children }) => {
  const [heroProgress, setHeroProgress] = useState(0);
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const checkDevice = () => {
      const w = window.innerWidth;
      if (w < 768) setDevice("mobile");
      else if (w < 1024) setDevice("tablet");
      else setDevice("desktop");
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const isDesktop = device === "desktop";

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
            // Desktop = full drama
            scale: isDesktop
              ? 1.1 - heroProgress * 0.4
              : 1.02, // 👈 mobile/tablet = almost static

            x: isDesktop ? heroProgress * 140 : 0,
            y: isDesktop ? heroProgress * 40 : 0,
          }}
        />
      </div>
    </div>
  );
};

export default MainLayout;
