import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { events } from "../data/Eventdata";

const Timeline = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { margin: "-100px" });

  const [selectedIndex, setSelectedIndex] = useState(0); // Track selected event

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-[#1f3cfc] text-white font-bold">
      {/* Image Section (Top on mobile, left on desktop) */}
      <div className="w-full md:w-2/5 flex items-center justify-center p-6 md:p-0 relative overflow-hidden">
        <img
          src={`/images/eventvisual${selectedIndex + 1}.png`}
          alt="Event Visual"
          className="max-h-[300px] md:max-h-[80%] rounded-2xl border-4 border-white shadow-lg"
          style={{ width: "80%", height: "400px" }}
        />
      </div>

      {/* Timeline Section (Below image on mobile, right on desktop) */}
      <div className="w-full md:w-3/5 flex flex-col px-6 md:px-10 py-8 md:border-l-3 border-white/100">
        {/* Animated Header */}
        <motion.div
          ref={headingRef}
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <h2
            className="text-3xl md:text-7xl mb-6 md:mb-10 py-4"
            style={{ fontFamily: "CameraObscuraDEMO, sans-serif" }}
          >
            <span style={{ color: "#f6b801" }}>DAMN!</span> We Did This?
          </h2>
        </motion.div>

        {/* Scrollable Events */}
        <div className="flex-1 overflow-y-auto space-y-6 md:space-y-8 pl-4 md:pl-8 pr-2 scrollbar-hide max-h-[50vh] md:max-h-[70vh]">
          {events.map((event, index) => {
            const isSelected = index === selectedIndex;

            return (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="border-b border-white px-4 pl-0 pb-6 hover:scale-103 transition-transform duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3
                      className={`text-xl md:text-5xl mb-2 md:mb-4 shrikhand-regular ${
                        isSelected ? "text-white" : "text-[#adb8f9]"
                      }`}
                    >
                      {event.title}
                    </h3>
                    <p
                      className={`text-sm md:text-base space-grotesk-regular ${
                        isSelected ? "text-white" : "text-[#adb8f9]"
                      }`}
                    >
                      {event.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pr-4 pt-3">
                    {event.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`border space-grotesk-regular text-xs md:text-sm px-3 py-2 rounded-full ${
                          isSelected
                            ? "border-white bg-white/20 text-white"
                            : "border-white/50 bg-white/10"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
