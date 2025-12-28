import { motion } from "framer-motion";
import { useState } from "react";

const MainLayout = ({ children }) => {
  // Hero controls this later
  const [heroProgress, setHeroProgress] = useState(0);

  return (
    <div className="relative w-full min-h-screen bg-black text-white flex">

      {/* LEFT SIDE: scrollable content */}
      <div className="relative w-full md:w-[60%] z-10">
        {typeof children === "function"
          ? children({ setHeroProgress })
          : children}
      </div>

      {/* RIGHT SIDE: persistent image */}
      <div className="hidden md:block md:w-[40%]">
        <motion.img
          src="./images/san.png"
          alt="Hero Visual"
          className="fixed top-1/2 right-0 -translate-y-1/2
                     h-[150%] w-auto pointer-events-none select-none"
          style={{
            scale: 1.1 - heroProgress * 0.4,
            x: heroProgress * 140,
            y: heroProgress * 40,
          }}
        />
      </div>

    </div>
  );
};

export default MainLayout;
