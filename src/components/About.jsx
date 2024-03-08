import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="title" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]" //max-w-3xl
      >
        A full-stack web developer is a versatile professional skilled in both
        front-end and back-end technologies, proficient in languages such as
        HTML, CSS, JavaScript, and frameworks like React.js and Angular for
        creating intuitive user interfaces. They also possess expertise in
        server-side technologies such as .Net Core, Node.js or Python, along
        with database management systems like MySQL or MongoDB for building
        robust back-end systems. With a comprehensive understanding of the
        entire web development process, they collaborate closely with designers,
        UX/UI specialists, and other developers to deliver high-quality,
        responsive web applications that meet client needs. Their adaptability,
        problem-solving skills, and commitment to continuous learning make them
        valuable assets in today's fast-paced digital landscape.
        {/* I'm a skilled software devloper with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problam. Let's work together to bring your ideas to life! */}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
