import React from 'react'
import { motion } from "framer-motion";

const ThankingPage = () => {
  return (
    <div className="w-full pb-50 pt-98 px-12 bg-black text-white flex items-end flex-col">
           
      
      <motion.div
        className="w-[60vw]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
          
          <div className="w-[30vw] font-['Montserrat'] space-y-10">

            
            <div>
              <p className="text-md tracking-wide text-white/70 mb-1">
                Dear Visitor,
              </p>
            </div>

            
            <div>
              <p className="text-md tracking-wide text-white/70 mb-1 ">
                Thank you for stopping by and <br /> taking the time to checkout my <br /> 
                profile. Please feel free to reach <br /> out.
              </p>
            </div>

            {/* Socials */}
            <div className='flex flex-col gap-4'>
              <p className="text-md tracking-wide text-white/70 mb-1">
                Sincerly,
              </p>
            
            <div>

              <p className="text-3xl ml-[-1vh] font-['Caveat'] tracking-wider">Sanyog</p>

            </div>
              
            </div>

          </div>
        
      </motion.div>
    </div>
  )
}

export default ThankingPage