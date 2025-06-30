import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "../utils/motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import ExpandableList from "./ExpandableList";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience?.icon}
            alt={experience?.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-xl sm:text-2xl font-bold">
          {experience?.title}
        </h3>
        <p className="text-secondary text-sm sm:text-base font-medium mt-1">
          {experience?.company_name}
        </p>
      </div>

      {/* 🆕 Reusable ExpandableList */}
      <ExpandableList items={experience?.points} previewCount={2} />
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// ✅ Default Export
export default SectionWrapper(Experience, "experience");
