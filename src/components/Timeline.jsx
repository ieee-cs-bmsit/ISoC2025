import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { events } from "../data/Eventdata";

const Timeline = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { margin: "-100px" });

  const [selectedIndex, setSelectedIndex] = useState(0); // Track selected event

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-[#1f3cfc] text-white font-bold">
      {/* Image Section */}
      <div className="w-full md:w-2/5 flex items-center justify-center p-6 md:p-0 relative overflow-hidden">
        <div className="w-[80%] h-[400px] md:h-[65%] border-4 border-white rounded-2xl flex items-center justify-center shadow-lg bg-white/10">
          <img
            src={`images/eventvisual${selectedIndex + 1}.svg`}
            alt="Event Visual"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Timeline Section */}
      <div className="w-full md:w-3/5 flex flex-col px-6 md:px-10 py-8 md:border-l-3 border-white/100">
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
            <span style={{ color: "#f6b801" }}>Here’s</span> What’s Coming!
          </h2>
        </motion.div>

        {/* Events List */}
        <div className="flex-1 overflow-y-auto space-y-6 md:space-y-8 pl-4 md:pl-8 pr-2 scrollbar-hide max-h-[50vh] md:max-h-[70vh]">
          {events.map((event, index) => {
            const isSelected = index === selectedIndex;

            return (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="border-b border-white px-4 pl-0 pb-6 hover:scale-[1.01] transition-transform duration-300 cursor-pointer"
              >
                {/* Title & Date */}
                <div className="flex items-start justify-between gap-4 flex-nowrap w-full">
                  <h3
                    className={`text-xl md:text-4xl shrikhand-regular ${
                      isSelected ? "text-white" : "text-[#adb8f9]"
                    }`}
                    style={{ flex: "1 1 auto" }}
                  >
                    {event.title}
                  </h3>
                  <span
                    className={`border space-grotesk-regular text-sm md:text-xl px-4 py-2 md:py-3 rounded-full whitespace-nowrap ${
                      isSelected
                        ? "border-white bg-white/20 text-white"
                        : "border-white/50 bg-white/10 text-white"
                    }`}
                    style={{ flexShrink: 0 }}
                  >
                    {event.date}
                  </span>
                </div>

                {/* Subtitle below */}
                <p
                  className={`text-sm md:text-xl space-grotesk-regular mt-2 ${
                    isSelected ? "text-white" : "text-[#adb8f9]"
                  }`}
                >
                  {event.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
