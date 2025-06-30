import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 500);
    const handleResize = () => setIsMobile(window.innerWidth <= 500);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-4`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="flex flex-col">
          <h1 className={`${styles.heroHeadText}`}>
            👋Hi, I'm <span className="text-[#915eff]">Raja</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 !text-sm`}>
            {/* I Develope user <br className="sm:block hidden" /> interfaces and
            web applications. */}
            a Full Stack Developer passionate about building modern and
            efficient web applications. I specialize in creating responsive
            front-end interfaces with React.js, and developing secure,
            high-performance back-end APIs using ASP.NET Core Web API. I also
            work with SQL Server to design and manage relational databases for
            scalable solutions.
            {/* I Develope user interfaces with HTML, CSS, and JavaScript for a
            seamless user experience. Back-end: Managing server-side logic and
            databases with languages like Python or Node.js for efficient data
            processing. */}
          </p>
        </div>
      </div>
      {!isMobile && <ComputersCanvas />}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
