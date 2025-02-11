import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TrueFocusPreloader = ({
  sentence = "Loading...",
  manualMode = false,
  blurAmount = 11,
  borderColor = "rgb(248, 120, 23)",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  loadingDuration = 3, // Set preloader duration in seconds
  onComplete, // Callback when preloader finishes
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [isLoading, setIsLoading] = useState(true); // Control preloader visibility

  const containerRef = useRef(null);
  const wordRefs = useRef([]);

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex]);

  useEffect(() => {
    // Hide the preloader after 'loadingDuration' seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) onComplete();
    }, loadingDuration * 1000);

    return () => clearTimeout(timer);
  }, [loadingDuration, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 flex justify-center items-center bg-black z-50"
      style={{ visibility: isLoading ? "visible" : "hidden" }} // Hide completely when finished
    >
      <div ref={containerRef} className="relative flex gap-4 justify-center items-center flex-wrap">
        {words.map((word, index) => (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            className="relative text-[3rem] font-black text-white cursor-pointer"
            style={{
              filter: index === currentIndex ? `blur(0px)` : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`,
            }}
          >
            {word}
          </span>
        ))}

        <motion.div
          className="absolute top-0 left-0 pointer-events-none box-border border-0"
          animate={{
            x: focusRect.x,
            y: focusRect.y,
            width: focusRect.width,
            height: focusRect.height,
            opacity: isLoading ? 1 : 0,
          }}
          transition={{ duration: animationDuration }}
        >
          <span
            className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
            style={{ borderColor, filter: "drop-shadow(0 0 4px var(--border-color))" }}
          ></span>
          <span
            className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
            style={{ borderColor, filter: "drop-shadow(0 0 4px var(--border-color))" }}
          ></span>
          <span
            className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
            style={{ borderColor, filter: "drop-shadow(0 0 4px var(--border-color))" }}
          ></span>
          <span
            className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
            style={{ borderColor, filter: "drop-shadow(0 0 4px var(--border-color))" }}
          ></span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TrueFocusPreloader;
