import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { events } from "../data/Eventdata";

const Timeline = () => {
  const headingRef = useRef(null);
  const scrollRef = useRef(null);
  const hasAnimated = useRef(false); // Track if scroll animation has already happened
  const isInView = useInView(headingRef, { margin: "-100px" });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null); // New state for hover preview

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      const el = scrollRef.current;
      if (el && el.scrollHeight > el.clientHeight) {
        el.scrollTo({ top: 300, behavior: "smooth" });
        setTimeout(() => {
          el.scrollTo({ top: 0, behavior: "smooth" });
        }, 1000);
      }
      hasAnimated.current = true;
    }
  }, [isInView]);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-[#1f3cfc] text-white font-bold">
      {/* Image Section */}
      <div
        className="w-full md:w-2/5 flex items-center justify-center p-6 md:p-0 relative overflow-visible bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/images/timelinebg.svg')" }}
      >
        <div className="w-[80%] h-[400px] md:h-[65%] border-4 border-white rounded-2xl flex items-center justify-center bg-white/10 shadow-[-12px_12px_24px_rgba(0,0,0,0.2)] z-10">
          <img
            src={`images/eventvisual${(hoveredIndex !== null ? hoveredIndex : selectedIndex) + 1}.svg`}
            alt="Event Visual"
            className="w-full h-full object-cover rounded-xl transition-all duration-300 ease-in-out"
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
            style={{ fontFamily: "CameraObscuraDEMO, sans-serif", letterSpacing: 1 }}
          >
            <span style={{ color: "#f6b801" }}>Here’s</span> What’s Coming!
          </h2>
        </motion.div>

        {/* Scrollable Events List */}
        <div
          ref={scrollRef}
          className="flex-1 space-y-6 md:space-y-8 pl-4 md:pl-8 pr-2 max-h-[50vh] md:max-h-[70vh] overflow-y-auto"
          style={{
            scrollbarWidth: "normal",
            scrollbarColor: "#a7adf2 transparent",
          }}
        >
          {events.map((event, index) => {
            const isSelected = index === selectedIndex;

            return (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="border-b border-white px-4 pl-0 pb-6 hover:scale-[1.01] transition-transform duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4 flex-nowrap w-full">
                  <h3
                    className={`text-xl md:text-4xl shrikhand-regular ${
                      isSelected ? "text-white" : "text-[#adb8f9] hover:text-[#d7d8fe]"
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
