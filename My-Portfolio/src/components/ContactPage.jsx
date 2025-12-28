import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div 
    id="contact"
    className="w-full pt-20 px-12 bg-black text-white flex flex-col">

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

      {/* Contact Section */}
      <motion.div
        className="w-[60vw]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex items-start justify-between w-[53vw] gap-24">

          {/* Section Title */}
          <span className="font-['InstrumentSerif'] text-4xl italic tracking-wide text-white/70 whitespace-nowrap">
            <span className="text-2xl">05</span> Contact
          </span>

          {/* Contact Details */}
          <div className="w-[30vw] pl-[10vw] font-['Montserrat'] space-y-10">

            {/* Phone */}
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60 mb-1">
                Phone
              </p>
              <p className="text-md font-medium">
                +91 83079 70785
              </p>
            </div>

            {/* Email */}
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60 mb-1">
                Email
              </p>
              <p className="text-md font-medium">
                sanyogbiswal22@gmail.com
              </p>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60 mb-1">
                Socials
              </p>
              <ul className="space-y-2 text-md font-medium">
                <li>
                  <a
                    href="https://x.com/san_here_22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/70 transition-colors"
                  >
                    X.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sanyogbiswal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/70 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
