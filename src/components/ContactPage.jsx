import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div 
      id="contact"
      className="w-full pt-20 px-6 sm:px-10 lg:px-12 bg-transparent text-white flex flex-col min-h-[min-content]"
    >

      {/* Gray + White Animated Line */}
      <div className="relative w-full lg:w-[53vw] h-[2px] bg-white/30 overflow-hidden mb-10">
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
        className="w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-start">

          {/* Section Title */}
          <span className="font-['InstrumentSerif'] text-3xl sm:text-4xl italic tracking-wide text-white/70 whitespace-nowrap">
            <span className="text-xl sm:text-2xl">05</span> Contact
          </span>

          {/* Contact Details */}
          <div className="w-full pb-20 lg:w-[55vw] flex flex-col space-y-8 lg:pl-16">
            
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

            {/* Thanking Message */}
            <div className="space-y-4 mt-6">
              <p className="text-md tracking-wide text-white/70 mb-2">
                Dear Visitor,
              </p>
              <p className="text-md tracking-wide text-white/70">
                Thank you for stopping by and <br />
                taking the time to check out my profile. <br />
                Please feel free to reach out.
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-md tracking-wide text-white/70">Sincerely,</p>
                <p className="text-3xl font-['Caveat'] tracking-wider">Sanyog</p>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
