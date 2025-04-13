import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";

import grid from "../assets/img/pngegg.png";
import chemicalStruct from "../assets/img/chem.png";
import linePattern from "../assets/img/lines.png";
import linePattern2 from "../assets/img/pattern2.png";
import bgPattern from "../assets/img/bgPattern.png";

import { ArrowDown } from "lucide-react";

const ScrollCard = () => {
    const wrapperRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const cardRefs = useRef([]);
    const headingRef = useRef(null);
    const numCards = 4;

    const [showHeading, setShowHeading] = useState(false);
    const [fadeHeading, setFadeHeading] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setShowHeading(entry.isIntersecting),
            { threshold: 0.2 }
        );

        if (headingRef.current) observer.observe(headingRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const scrollEl = scrollContainerRef.current;
        const cards = cardRefs.current;

        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollTop = scrollEl.scrollTop;
                    const viewportHeight = scrollEl.clientHeight;

                    setFadeHeading(scrollTop > viewportHeight * 0.4);

                    cards.forEach((card, index) => {
                        if (!card) return;

                        const initialAngle = -0.8 * index;
                        const start = index * viewportHeight * 0.9;
                        const end = start + viewportHeight;
                        const progress = (scrollTop - start) / (end - start);
                        const clampedProgress = Math.max(0, Math.min(1, progress));

                        let rotate = initialAngle;
                        let translateX = 0;

                        if (index === numCards - 1) {
                            const lastStart = (numCards - 2) * viewportHeight * 0.9;
                            const lastEnd = lastStart + viewportHeight;
                            const lastProgress = (scrollTop - lastStart) / (lastEnd - lastStart);
                            const clampedLastProgress = Math.max(0, Math.min(1, lastProgress));
                            rotate = initialAngle + (0 - initialAngle) * clampedLastProgress;
                        } else {
                            if (clampedProgress >= 1) {
                                rotate = index % 2 === 0 ? -24 : 24;
                                translateX = index % 2 === 0 ? -200 : 200;
                            } else if (clampedProgress > 0) {
                                rotate =
                                    initialAngle +
                                    ((index % 2 === 0 ? -24 : 24) - initialAngle) * clampedProgress;
                                translateX = (index % 2 === 0 ? -200 : 200) * clampedProgress;
                            }

                            const prevCardEnd = (index - 1) * viewportHeight * 0.9 + viewportHeight;
                            if (
                                index > 0 &&
                                scrollTop >= prevCardEnd - viewportHeight &&
                                scrollTop <= prevCardEnd
                            ) {
                                const revealProgress =
                                    (scrollTop - (prevCardEnd - viewportHeight)) / viewportHeight;
                                const clampedReveal = Math.max(0, Math.min(1, revealProgress));
                                rotate = initialAngle + (0 - initialAngle) * clampedReveal;
                            }
                        }

                        card.style.transform = `translateX(${translateX}vw) rotate(${rotate}deg)`;
                        card.style.zIndex = numCards - index;
                    });

                    ticking = false;
                });

                ticking = true;
            }
        };

        scrollEl.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => scrollEl.removeEventListener("scroll", handleScroll);
    }, []);

    const bgImageStyle = {
        backgroundImage: `url(${bgPattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "invert(1) brightness(0.75)",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        opacity: 0.5,
        pointerEvents: "none",
    };

    const cardBgImgs = [grid, linePattern, chemicalStruct, linePattern2];

    return (
        <div ref={wrapperRef} className="w-full h-[105vh] relative">
            {/* Inline style tag to hide scrollbar while retaining scroll */}
            <style>
                {`
                    .scroll-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .scroll-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}
            </style>

            <div
                ref={scrollContainerRef}
                className="w-full h-full scroll-hide"
                style={{
                    overflowY: "auto",
                    overflowX: "hidden",
                    height: "105vh",
                    minHeight: "105vh",
                }}
            >
                <div
                    className="flex justify-center"
                    style={{ height: `${(numCards - 1) * 100 + 80}vh` }}
                >
                    <div className="w-full h-[105vh] sticky top-0 flex items-center justify-center bg-[#511bf5] overflow-hidden">
                        {/* Background */}
                        <div style={bgImageStyle} />

                        {/* Heading */}
                        <h1
                            ref={headingRef}
                            className={`
                                absolute lg:top-[15%] top-[10%] text-4xl md:text-6xl font-bold text-center font-title text-amber-300 px-10
                                transition-all duration-700 ease-in-out z-50 
                                ${showHeading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                                ${fadeHeading ? "opacity-20" : ""}
                            `}
                            style={{ willChange: "opacity, transform" }}
                        >
                            IEEE SOC <span className="text-white italic">CONTRIBUTIONS</span>
                        </h1>

                        {[...Array(numCards)].map((_, i) => (
                            <div
                                key={i}
                                ref={(el) => (cardRefs.current[i] = el)}
                                className="absolute mt-[15vh] w-[75vw] h-1/2 max-sm:w-[80vw] max-sm:h-[60vh] rounded-3xl flex justify-around border border-black"
                                style={{
                                    backgroundColor: "#e0e0d7",
                                    transition: "transform 0ms",
                                    willChange: "transform",
                                    backfaceVisibility: "hidden",
                                    zIndex: numCards - i,
                                }}
                            >
                                <div className="flex flex-col lg:flex-row items-center lg:items-start w-full h-full lg:justify-between justify-between lg:pt-0 pt-6 overflow-hidden relative">
                                    <div className="flex flex-col h-2/5 lg:h-full w-[85%] lg:w-3/5 lg:justify-center gap-3 lg:gap-5 lg:ml-15">
                                        <h1 className="text-[clamp(1.5rem,5vw,2.5rem)] font-extrabold font-body">
                                            Repo Preview
                                        </h1>
                                        <p className="text-[clamp(1.5rem,3vw,2.5rem)] leading-8 font-body2 lg:mb-3">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Suscipit recusandae iure.
                                        </p>
                                        <button
                                            disabled
                                            className="lg:self-start self-end w-fit px-4 rounded-full border border-gray-400 text-sm sm:text-base text-gray-500 font-semibold flex gap-2 items-center font-body leading-7"
                                        >
                                            Scroll <ArrowDown />
                                        </button>
                                    </div>
                                    <div
                                        className="relative lg:h-full h-1/4 w-full lg:w-[20%] bg-center bg-cover flex flex-col lg:p-0 p-12 lg:justify-center justify-center lg:items-end items-start rounded-[5.5rem]"
                                        style={{
                                            backgroundImage: `url(${cardBgImgs[i]})`,
                                            willChange: "transform",
                                            transform: "scale(-1.15)",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollCard;
